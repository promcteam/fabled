package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.Bukkit;
import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.SkillDamageEvent;

import java.util.List;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class SkillTakenTrigger extends SkillTrigger {

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "TOOK_SKILL_DAMAGE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final SkillDamageEvent event) {
        return event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final SkillDamageEvent event, final Settings settings) {
        return isUsingTarget(settings) ? event.getDamager() : event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final SkillDamageEvent event, final CastData data) {
        data.put("api-taken", event.getDamage());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(SkillDamageEvent event, int level, Settings settings) {
        final List<String> damageTypes = settings.getStringList("category");
        return damageTypes.isEmpty() || damageTypes.contains("default") || damageTypes.contains(event.getClassification());
    }
}
