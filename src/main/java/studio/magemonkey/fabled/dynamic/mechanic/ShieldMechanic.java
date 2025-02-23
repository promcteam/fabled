package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.shield.ShieldEffect;
import studio.magemonkey.fabled.shield.ShieldManager;

import java.util.List;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.mechanic.ShieldMechanic
 */
public class ShieldMechanic extends MechanicComponent {
    private static final String CLASSIFIER = "classifier";
    private static final String VALUE      = "value";
    private static final String PERCENT    = "percent";
    private static final String SECONDS    = "seconds";

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

        ShieldManager manager = Fabled.inst().getShieldManager();

        String classifier = settings.getString(CLASSIFIER, "default");
        double value      = parseValues(caster, VALUE, level, 5.0);
        double percent    = parseValues(caster, PERCENT, level, 1.0);
        int    seconds    = (int) parseValues(caster, SECONDS, level, 5);

        for (LivingEntity target : targets) {
            ShieldEffect effect =
                    new ShieldEffect(classifier, value, percent, System.currentTimeMillis() + seconds * 1000L);
            manager.addEffect(target, effect);
        }

        return !targets.isEmpty();
    }
}
