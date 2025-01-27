package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;

import java.util.List;

/**
 * Modifies player's class experience
 */
public class ExperienceMechanic extends MechanicComponent {
    private static final String EXP        = "value";
    private static final String MODE       = "mode";
    private static final String LEVELS     = "levels";

    @Override
    public String getKey() {
        return "vanilla experience";
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
    public boolean execute(LivingEntity caster, int level, List<LivingEntity> targets, boolean force) {
        if (!(caster instanceof Player)) return false;
        Player player = (Player) caster;

        int         expValue        = settings.getInt(EXP, 0);
        String      mode            = settings.getString(MODE, "give").toLowerCase();
        Boolean     levels          = settings.getBool(LEVELS, false);

        if (levels) {
            switch (mode) {
            case "give":
                player.giveExpLevels(expValue);
                player.setExp(0);
                break;
            case "set":
                player.setLevel(expValue);
                player.setExp(0);
                break;
            default:
                return false;
            }
        }
        else {
            switch (mode) {
            case "give":
                player.giveExp(expValue);
                break;
            case "set":
                player.setLevel(0);
                player.setExp(0);
                player.giveExp(expValue);
                break;
            default:
                return false;
            }
        }
        return true;
    }
}
