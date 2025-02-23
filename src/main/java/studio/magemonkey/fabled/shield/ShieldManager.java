package studio.magemonkey.fabled.shield;

import lombok.RequiredArgsConstructor;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import studio.magemonkey.fabled.Fabled;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RequiredArgsConstructor
public class ShieldManager {
    private final Fabled                   plugin;
    private final Map<UUID, ShieldDetails> shieldDetails = new HashMap<>();

    public ShieldDetails getShieldDetails(LivingEntity entity) {
        return shieldDetails.get(entity.getUniqueId());
    }

    public void setShieldDetails(LivingEntity entity, ShieldDetails details) {
        shieldDetails.put(entity.getUniqueId(), details);
    }

    public void removeShieldDetails(LivingEntity entity) {
        ShieldDetails details = shieldDetails.remove(entity.getUniqueId());
        if (details != null) {
            details.clearEffects();
        }
    }

    public void clearShields() {
        shieldDetails.values().forEach(ShieldDetails::clearEffects);
        shieldDetails.clear();
    }

    public boolean hasShield(LivingEntity entity) {
        return shieldDetails.containsKey(entity.getUniqueId());
    }

    public void addEffect(LivingEntity entity, ShieldEffect effect, int ticks) {
        UUID          uuid    = entity.getUniqueId();
        ShieldDetails details = shieldDetails.computeIfAbsent(uuid, ShieldDetails::new);
        details.addEffect(effect, ticks);

        displayShieldDetails(entity);
    }

    public void displayShieldDetails(LivingEntity entity) {
        if (!(entity instanceof Player)) {
            return;
        }

        ShieldDetails details = getShieldDetails(entity);
        if (details == null) {
            return;
        }

        if (details.getDisplayTask() != null && !details.getDisplayTask().isCancelled()) {
            // Task is actively running, no need to display the shield effects
            return;
        }

        details.setDisplayTask(plugin.getServer().getScheduler().runTaskTimer(plugin, () -> {
            if (!entity.isValid()) {
                details.getDisplayTask().cancel();
                return;
            }

            if (!details.hasEffects()) {
                details.getDisplayTask().cancel();
            }

            for (ShieldEffect effect : details.getActiveEffects()) {
                // Display the shield effect to the entity
                effect.display((Player) entity);
            }
        }, 0, 20));
    }
}
