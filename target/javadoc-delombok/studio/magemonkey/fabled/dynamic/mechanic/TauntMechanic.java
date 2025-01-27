/**
 * Fabled
 * studio.magemonkey.fabled.dynamic.mechanic.TauntMechanic
 * <p>
 * The MIT License (MIT)
 * <p>
 * Copyright (c) 2024 MageMonkeyStudio
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.entity.Creature;
import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.hook.MythicMobsHook;
import studio.magemonkey.fabled.hook.PluginChecker;

import java.util.List;

/**
 * Mechanic for taunting mobs
 */
public class TauntMechanic extends MechanicComponent {
    private static final String AMOUNT = "amount";

    @Override
    public String getKey() {
        return "taunt";
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
        double  amount  = parseValues(caster, AMOUNT, level, 1);
        boolean taunted = false;
        for (LivingEntity entity : targets) {
            if (entity instanceof Creature && entity != caster) {
                if (PluginChecker.isMythicMobsActive() && MythicMobsHook.isMonster(entity)) {
                    MythicMobsHook.taunt(entity, caster, amount);
                } else {
                    ((Creature) entity).setTarget(caster);
                }
                taunted = true;
            }
        }
        return taunted;
    }
}
