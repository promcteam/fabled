package studio.magemonkey.fabled.dynamic.condition;

import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;

public class AttackIndicatorCondition extends ConditionComponent {
    private static final String MIN = "min";
    private static final String MAX = "max";

    @Override
    public String getKey() {
        return "attack indicator";
    }

    @Override
    public boolean test(LivingEntity caster, int level, LivingEntity target) {
        double min = parseValues(target, MIN, level, settings.getFloat(MIN, 0));
        double max = parseValues(target, MAX, level, settings.getFloat(MAX, 0));

        if (!(caster instanceof Player))
            return false;
        Player player = (Player) caster;

        return player.getAttackCooldown() >= min && player.getAttackCooldown() <= max;
    }
}
