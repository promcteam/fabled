package studio.magemonkey.fabled.shield;

import lombok.*;
import net.md_5.bungee.api.ChatMessageType;
import net.md_5.bungee.api.chat.TextComponent;
import org.bukkit.ChatColor;
import org.bukkit.boss.BarColor;
import org.bukkit.boss.BarStyle;
import org.bukkit.boss.BossBar;
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
    private BossBar    bossBar;
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
     * Applies damage to the shield effect, first reducing the damage by the percent value.
     * If the shield does not absorb all the damage, the remaining damage is returned.
     *
     * @param amount the amount of damage to apply
     * @return the remaining damage that was not absorbed by the shield
     */
    public double damage(double amount) {
        double modified = amount * percent;
        double actual   = Math.min(modified, getRemaining());
        double diff     = modified - actual;

        taken += actual;
        return diff;
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
        // TODO sending the message this way absolutely BREAKS hex colors
        //  How do we convert from legacy text to Components with hex?
        player.spigot()
                .sendMessage(ChatMessageType.ACTION_BAR,
                        new TextComponent(name + ": " + getFormattedShieldString()));
    }

    private void displayTitle(Player player) {
        // TODO Eventually this will need to be updated to use Adventure API, but we aren't quite ready to make that change yet
        MsgUT.sendTitles(player, getFormattedShieldString(), name, 0, 20, 0);
    }

    private void displayBossBar(Player player) {
        if (bossBar == null) {
            bossBar = player.getServer().createBossBar(name, BarColor.GREEN, BarStyle.SOLID);
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
