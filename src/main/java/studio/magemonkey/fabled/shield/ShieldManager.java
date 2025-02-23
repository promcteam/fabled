package studio.magemonkey.fabled.shield;

import lombok.RequiredArgsConstructor;
import org.bukkit.entity.LivingEntity;
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
        shieldDetails.remove(entity.getUniqueId());
    }

    public void clearShields() {
        shieldDetails.clear();
    }

    public boolean hasShield(LivingEntity entity) {
        return shieldDetails.containsKey(entity.getUniqueId());
    }

    public void addEffect(LivingEntity entity, ShieldEffect effect) {
        UUID          uuid    = entity.getUniqueId();
        ShieldDetails details = shieldDetails.computeIfAbsent(uuid, ShieldDetails::new);
        details.addEffect(effect);
    }
}
