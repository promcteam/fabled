package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.util.Buff;
import studio.magemonkey.fabled.api.util.BuffManager;
import studio.magemonkey.fabled.api.util.BuffType;

import java.util.List;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.mechanic.BuffMechanic
 */
public class BuffMechanic extends MechanicComponent {
    private static final String MODIFIER  = "modifier";
    private static final String CATEGORY  = "category";
    private static final String TYPE      = "type";
    private static final String VALUE     = "value";
    private static final String SECONDS   = "seconds";
    private static final String IMMEDIATE = "immediate";

    @Override
    public String getKey() {
        return "buff";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean execute(LivingEntity caster, int level, List<LivingEntity> targets, boolean force) {
        if (targets.isEmpty()) return false;

        boolean immediate = settings.getString(IMMEDIATE, "false").equalsIgnoreCase("true");
        double  value     = parseValues(caster, VALUE, level, 1.0);
        boolean percent   = settings.getString(MODIFIER, "flat").equalsIgnoreCase("multiplier");

        if (immediate) {
            skill.setImmediateBuff(value, !percent);
            return true;
        }

        String   rawType  = settings.getString(TYPE, "DAMAGE");
        BuffType buffType = BuffType.getByNameOrLocal(rawType);
        double   seconds  = parseValues(caster, SECONDS, level, 3.0);
        String   category = settings.getString(CATEGORY, null);
        int      ticks    = (int) (seconds * 20);

        String qualifiedType;
        if (buffType != null) {
            qualifiedType = buffType.getLocalizedName();
            if (category != null) {
                qualifiedType += "_" + category;
            }
        } else {
            qualifiedType = rawType;
        }

        for (LivingEntity target : targets) {
            BuffManager.getBuffData(target).addBuff(
                    qualifiedType,
                    category,
                    new Buff(this.skill.getName() + "-" + caster.getName(), value, percent),
                    ticks);
        }
        return !targets.isEmpty();
    }
}
