package studio.magemonkey.fabled.shield;

import lombok.*;
import org.bukkit.ChatColor;
import org.bukkit.Keyed;
import org.bukkit.boss.BarColor;
import org.bukkit.boss.BarStyle;
import org.bukkit.boss.BossBar;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.scheduler.BukkitTask;
import studio.magemonkey.codex.util.MsgUT;

@Data
@RequiredArgsConstructor
public class ShieldEffect {
    private final String        name;
    private final String        classifier;
    private final double        amount;
    private       double        percent         = 1;
    private       ShieldDisplay displayLocation = ShieldDisplay.ACTION_BAR;

    private double taken;

    @Getter(AccessLevel.PRIVATE)
    @Setter(AccessLevel.PRIVATE)
    private BossBar  bossBar;
    private BarColor barColor = BarColor.GREEN;
    private BarStyle barStyle = BarStyle.SOLID;

    private Keyed hitSound;
    private Keyed breakSound;

    private BukkitTask task;

    public ShieldEffect(String name, String classifier, double amount, double percent) {
        this(name, classifier, amount);
        this.percent = percent;
    }

    public void destroy() {
        if (bossBar != null) {
            bossBar.removeAll();
            bossBar = null;
        }

        if (task != null) {
            task.cancel();
            task = null;
        }
    }

    /**
     * Breaks the shield effect, removing it from the entity.
     * This calls a {@link FabledShieldBreakEvent}
     * Also, optionally plays a sound to the player.
     *
     * @param entity the entity to break the shield for
     */
    public void breakShield(LivingEntity entity) {
        if (breakSound != null && entity instanceof Player) {
            ((Player) entity).playSound(entity.getLocation(), breakSound.getKey().getKey(), 1, 1);
        }

        // Call the event
        FabledShieldBreakEvent event = new FabledShieldBreakEvent(entity, this);
        entity.getServer().getPluginManager().callEvent(event);

        destroy();
    }

    /**
     * Applies damage to the shield effect, first reducing the damage by the percent value.
     * If the shield does not absorb all the damage, the remaining damage is returned.
     *
     * @param entity the entity to play the hit sound to
     * @param amount the amount of damage to apply
     * @return the remaining damage that was not absorbed by the shield
     */
    public double damage(LivingEntity entity, double amount) {
        double modified = amount * percent;
        modified = Math.min(modified, getRemaining());

        taken += modified;
        if (isExhausted()) breakShield(entity);
        else {
            // Play hit sound
            if (hitSound != null && entity instanceof Player) {
                ((Player) entity).playSound(entity.getLocation(), hitSound.getKey().getKey(), 1, 1);
            }
        }

        FabledShieldDamageEvent event = new FabledShieldDamageEvent(entity, this, modified);
        entity.getServer().getPluginManager().callEvent(event);

        return amount - modified;
    }

    public double damageAndDisplay(double amount, LivingEntity entity) {
        double remaining = damage(entity, amount);
        if (entity instanceof Player) display((Player) entity);
        return remaining;
    }

    public double getRemaining() {
        return amount - taken;
    }

    public boolean isExhausted() {
        return taken >= amount;
    }

    /**
     * Displays the shield effect to the player.
     * @param player the player to display shields to
     */
    public void display(Player player) {
        switch (displayLocation) {
            case ACTION_BAR:
                displayActionBar(player);
                break;
            case BOSS_BAR:
                // Don't show the boss bar if exhausted because
                // we want it to actually be removed
                if (isExhausted()) return;

                displayBossBar(player);
                break;
            case TITLE:
                displayTitle(player);
                break;
            case CHAT:
            default:
                displayChat(player);
                break;
        }
    }

    private void displayChat(Player player) {
        player.sendMessage(name + ": " + getFormattedShieldString());
    }

    private void displayActionBar(Player player) {
        MsgUT.sendActionBar(player, name + ": " + getFormattedShieldString());
    }

    private void displayTitle(Player player) {
        MsgUT.sendTitles(player, getFormattedShieldString(), name, 0, 20, 0);
    }

    private void displayBossBar(Player player) {
        if (bossBar == null) {
            bossBar = player.getServer().createBossBar(name, barColor, barStyle);
        }

        bossBar.setProgress(getRemaining() / amount);

        if (!bossBar.getPlayers().contains(player))
            bossBar.addPlayer(player);
    }

    private String getFormattedShieldString() {
        // We'll use 10 blocks, each representing 10% of the shield.
        // Each block will be colored based on the percentage of the shield used.
        // For example, if 15% is used, the first block will be red, the second will be yellow,
        // and the rest will be green.
        double percentUsed = taken / amount;

        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            if (percentUsed * 10 - i >= 1) {
                builder.append(ChatColor.RED);
            } else if (percentUsed * 10 - i >= 0.5) {
                builder.append(ChatColor.YELLOW);
            } else {
                builder.append(ChatColor.GREEN);
            }

            builder.append("█");
        }

        return builder.toString();
    }
}
