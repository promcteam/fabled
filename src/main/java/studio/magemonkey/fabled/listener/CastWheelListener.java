package studio.magemonkey.fabled.listener;

import net.md_5.bungee.api.ChatMessageType;
import net.md_5.bungee.api.chat.TextComponent;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.bukkit.Bukkit;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerChangedWorldEvent;
import org.bukkit.event.player.PlayerDropItemEvent;
import org.bukkit.event.player.PlayerItemHeldEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.event.player.PlayerSwapHandItemsEvent;
import org.bukkit.scheduler.BukkitRunnable;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.event.PlayerSkillUnlockEvent;
import studio.magemonkey.fabled.api.player.PlayerData;
import studio.magemonkey.fabled.cast.PlayerCastWheel;
import studio.magemonkey.fabled.hook.PlaceholderAPIHook;
import studio.magemonkey.fabled.hook.PluginChecker;

public class CastWheelListener extends FabledListener {
    private boolean enabled = true;

    @Override
    public void init() {
        MainListener.registerJoin(this::init);
        Bukkit.getOnlinePlayers().forEach(this::init);
    }

    @Override
    public void cleanup() {
        Bukkit.getOnlinePlayers().stream()
                .filter(player -> Fabled.getSettings().isWorldEnabled(player.getWorld()))
                .forEach(this::init);
        this.enabled = false;
    }

    private void init(Player player) {
        PlayerData data = Fabled.getData(player);
        data.getCastWheel().validate(data);
    }

    /**
     * Clears skill bars upon quitting the game
     *
     * @param event event details
     */
    @EventHandler(priority = EventPriority.MONITOR)
    public void onQuit(PlayerQuitEvent event) {
        if (Fabled.getSettings().isWorldEnabled(event.getPlayer().getWorld()))
            init(event.getPlayer());
    }

    @EventHandler(priority = EventPriority.LOWEST)
    public void onChangeWorldPre(PlayerChangedWorldEvent event) {
        if (!Fabled.getSettings().isWorldEnabled(event.getPlayer().getWorld()) && Fabled.getSettings()
                .isWorldEnabled(event.getFrom()))
            init(event.getPlayer());
    }

    /**
     * Adds unlocked skills to the skill bar if applicable
     *
     * @param event event details
     */
    @EventHandler
    public void onUnlock(PlayerSkillUnlockEvent event) {
        event.getPlayerData().getCastWheel().unlock(event.getUnlockedSkill());
    }

    public class CastWheelTask extends BukkitRunnable {
        private final PlayerData playerData;

        public CastWheelTask(PlayerData playerData) {
            this.playerData = playerData;
        }

        @Override
        public void run() {
            Player player = playerData.getPlayer();
            if (!enabled || player == null || !player.isOnline() || !isWorldEnabled(player)
                    || !playerData.getCastWheel().isCasting()) {
                this.cancel();
                return;
            }
            String message = playerData.getCastWheel().getMessage();
            if (PluginChecker.isPlaceholderAPIActive()) {
                message = PlaceholderAPIHook.format(message, player);
            }
            player.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(message));
            }

                    @Override
        public synchronized void cancel() throws IllegalStateException {
            super.cancel();
            Player player = playerData.getPlayer();
            if (player != null) player.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(""));
            }
        }

    @EventHandler
    public void onHandSwap(PlayerSwapHandItemsEvent event) {
        Player player = event.getPlayer();
        // Allow hand swap if Player is sneaking
        if (Fabled.getSettings().getWheelSneakToOffhand() && player.isSneaking()) return;
        event.setCancelled(true);
        PlayerData playerData = Fabled.getData(player);
        PlayerCastWheel castWheel = playerData.getCastWheel();
        if (castWheel.isCasting()) {
            castWheel.setCasting(false);
            // Stop casting sound
            player.playSound(player.getLocation(), Fabled.getSettings().getWheelSoundsStopCasting(), Fabled.getSettings().getWheelSoundsVolume(), 1);
        } else if (!castWheel.isEmpty()) {
            // Stop casting sound
            player.playSound(player.getLocation(), Fabled.getSettings().getWheelSoundsStartCasting(), Fabled.getSettings().getWheelSoundsVolume(), 1);
            castWheel.setCasting(true);
            new CastWheelTask(playerData).runTaskTimer(Fabled.inst(), 0, 1);
        }
    }

    @EventHandler
    public void onHeld(PlayerItemHeldEvent event) {
        Player player = event.getPlayer();
        PlayerData playerData = Fabled.getData(player);
        PlayerCastWheel castWheel = playerData.getCastWheel();

        // Return if Player is not Casting
        // Return if Player is Sneaking
        // Otherwise cancel scroll, change wheel
        if (!castWheel.isCasting()) return;
        if (Fabled.getSettings().getWheelSneakToScroll() && player.isSneaking()) return;
        event.setCancelled(true);

        player.playSound(player.getLocation(), Fabled.getSettings().getWheelSoundsScroll(), Fabled.getSettings().getWheelSoundsVolume(), 1);

        int previousSlot = event.getPreviousSlot();
        int newSlot = event.getNewSlot();
        int direction = (newSlot - previousSlot + 9) % 9;
        if (direction == 1) {
            castWheel.nextSkill();
        } else if (direction == 8) {
            castWheel.previousSkill();
        }
    }

    // Stops casting if you move items in your
    // inventory to allow regular dropping.
    // Only if using DROP mode
    @EventHandler
    public void onClick(InventoryClickEvent event) {
        Player player = (Player) event.getWhoClicked();
        PlayerData playerData = Fabled.getData(player);
        PlayerCastWheel castWheel = playerData.getCastWheel();
        castWheel.setCasting(false);
    }

    @EventHandler
    public void onDrop(PlayerDropItemEvent event) {
        Player player = event.getPlayer();
        PlayerData playerData = Fabled.getData(player);
        PlayerCastWheel castWheel = playerData.getCastWheel();
        if (!castWheel.isCasting()) return;
        event.setCancelled(true);
        castWheel.cast();
    }

    private boolean isWorldEnabled(Player player) {
        return Fabled.getSettings().isWorldEnabled(player.getWorld());
    }

}
