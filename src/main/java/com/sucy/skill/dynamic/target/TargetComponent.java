package com.sucy.skill.dynamic.target;

import com.sucy.skill.SkillAPI;
import com.sucy.skill.api.particle.ParticleHelper;
import com.sucy.skill.api.target.TargetHelper;
import com.sucy.skill.dynamic.ComponentType;
import com.sucy.skill.dynamic.DynamicSkill;
import com.sucy.skill.dynamic.EffectComponent;
import com.sucy.skill.dynamic.TempEntity;
import com.sucy.skill.listener.MechanicListener;
import mc.promcteam.engine.mccore.config.parse.DataSection;
import org.bukkit.GameMode;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.function.Function;

/**
 * ProSkillAPI © 2023
 * com.sucy.skill.dynamic.target.TargetComponent
 */
public abstract class TargetComponent extends EffectComponent {

    private static final String ALLY   = "group";
    private static final String WALL   = "wall";
    private static final String CASTER = "caster";
    private static final String MAX    = "max";

    boolean       everyone;
    boolean       allies;
    boolean       throughWall;
    IncludeCaster self;

    @Override
    public ComponentType getType() {
        return ComponentType.TARGET;
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
        final List<LivingEntity> list = getTargets(caster, level, targets);
        return (!list.isEmpty() && executeChildren(caster, level, list, force));
    }

    @Override
    public void load(DynamicSkill skill, DataSection config) {
        super.load(skill, config);

        final String group = settings.getString(ALLY, "enemy").toLowerCase();
        everyone = group.equals("both");
        allies = group.equals("ally");
        throughWall = settings.getString(WALL, "false").equalsIgnoreCase("true");
        self = IncludeCaster.valueOf(settings.getString(CASTER, "false").toUpperCase().replace(' ', '_'));
    }

    abstract List<LivingEntity> getTargets(
            final LivingEntity caster,
            final int level,
            final List<LivingEntity> targets);

    /**
     * {@inheritDoc}
     */
    @Override
    public void playPreview(List<Runnable> onPreviewStop, Player caster, int level, List<LivingEntity> targets) {
        if (preview.getBool("per-target")) {
            BukkitTask task = new BukkitRunnable() {
                @Override
                public void run() {
                    for (LivingEntity target : getTargets(caster, level, targets)) {
                        ParticleHelper.play(target.getLocation(), preview, Set.of(caster), "per-target-",
                                preview.getBool("per-target-" + "hitbox") ? target.getBoundingBox() : null
                        );
                    }
                }
            }.runTaskTimer(SkillAPI.inst(), 0, Math.max(1, preview.getInt("per-target-" + "period", 5)));
            onPreviewStop.add(task::cancel);
        }
    }

    List<LivingEntity> determineTargets(
            final LivingEntity caster,
            final int level,
            final List<LivingEntity> from,
            final Function<LivingEntity, List<LivingEntity>> conversion) {

        final double max = parseValues(caster, MAX, level, 99);

        final List<LivingEntity> list = new ArrayList<>();
        from.forEach(target -> {
            final List<LivingEntity> found = conversion.apply(target);
            int                      count = 0;

            for (LivingEntity entity : found) {
                if (count >= max) break;
                if (isValidTarget(caster, target, entity) || (self.equals(IncludeCaster.IN_AREA) && caster == entity)) {
                    list.add(entity);
                    count++;
                }
            }
        });
        if (self.equals(IncludeCaster.TRUE)) list.add(caster);
        return list;
    }

    boolean isValidTarget(final LivingEntity caster, final LivingEntity from, final LivingEntity target) {
        if (SkillAPI.getMeta(target, MechanicListener.ARMOR_STAND) != null) return false;
        if (target instanceof TempEntity) return true;
        if (target instanceof Player && (
                ((Player) target).getGameMode() == GameMode.SPECTATOR
                        || ((Player) target).getGameMode() == GameMode.CREATIVE
        )) return false;

        return target != caster && SkillAPI.getSettings().isValidTarget(target)
                && (throughWall || !TargetHelper.isObstructed(from.getEyeLocation(), target.getEyeLocation()))
                && (everyone || allies == SkillAPI.getSettings().isAlly(caster, target));
    }

    public enum IncludeCaster {
        TRUE, FALSE, IN_AREA
    }
}
