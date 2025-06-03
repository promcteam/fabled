package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.hook.MythicMobsHook;
import studio.magemonkey.fabled.hook.PluginChecker;

import java.util.List;

public class MythicMobSkill extends MechanicComponent {
    private static final String MYTHICSKILL   = "mythicskill";

    @Override
    public String getKey() {
        return "mythic mob skill";
    }

    /**
     * Executes the component
     *
     * @param caster  caster of the skill
     * @param level   level of the skill
     * @param targets targets to apply to
     * @param force
     * @return true if applied to something, false otherwise
     */
    @Override
    public boolean execute(final LivingEntity caster, final int level, final List<LivingEntity> targets, boolean force) {
        if (!PluginChecker.isMythicMobsActive()) {
            return false;
        }
        String mythicskill = settings.getString(MYTHICSKILL, "");

        for (final LivingEntity target : targets) {
            MythicMobsHook.castMythicMobSkill(target, mythicskill);;
        }

        return true;
    }
}