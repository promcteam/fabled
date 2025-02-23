package studio.magemonkey.fabled.shield;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.bukkit.Bukkit;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.scheduler.BukkitTask;
import studio.magemonkey.fabled.Fabled;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
public class ShieldDetails {
    private final UUID uniqueId;

    private final List<ShieldEffect> effects = new ArrayList<>();

    @Getter
    @Setter
    private BukkitTask displayTask;

    public ShieldDetails(LivingEntity entity) {
        this.uniqueId = entity.getUniqueId();
    }

    public LivingEntity getEntity() {
        return (LivingEntity) Bukkit.getEntity(uniqueId);
    }

    public void addEffect(ShieldEffect effect, int ticks) {
        effects.add(effect);
        effect.setTask(Fabled.schedule(new ShieldTask(effect), ticks));
    }

    public void removeEffect(ShieldEffect effect) {
        effect.destroy();
        effects.remove(effect);
    }

    public void removeEffect(String classifier) {
        effects.removeIf(effect -> {
            if (effect.getClassifier().equals(classifier)) {
                effect.destroy();
                return true;
            }

            return false;
        });
    }

    public ShieldEffect getEffect(String classifier) {
        update();
        return effects.stream().filter(effect -> effect.getClassifier().equals(classifier)).findFirst().orElse(null);
    }

    public boolean hasEffect(String classifier) {
        update();
        return effects.stream().anyMatch(effect -> effect.getClassifier().equals(classifier));
    }

    public void clearEffects() {
        effects.forEach(ShieldEffect::destroy);
        effects.clear();

        displayTask.cancel();
        displayTask = null;
    }

    public boolean hasEffects() {
        update();
        return !effects.isEmpty();
    }

    /**
     * Returns a list of all active shield effects.
     * This method will automatically remove any expired or exhausted effects.
     *
     * @return a list of all active shield effects
     */
    public List<ShieldEffect> getActiveEffects() {
        update();
        return effects;
    }

    /**
     * Updates the shield details, removing any expired or exhausted effects.
     */
    public void update() {
        effects.removeIf(shieldEffect -> {
            if (shieldEffect.isExhausted()) {
                if (getEntity() instanceof Player)
                    shieldEffect.display((Player) getEntity());
                shieldEffect.destroy();
                return true;
            }

            return false;
        });
    }

    @RequiredArgsConstructor
    private class ShieldTask implements Runnable {
        private final ShieldEffect effect;

        @Override
        public void run() {
            if (!getEntity().isValid()) {
                Fabled.inst().getShieldManager().removeShieldDetails(getEntity());
                return;
            }

            removeEffect(effect);
        }
    }
}
