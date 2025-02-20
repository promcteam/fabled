package studio.magemonkey.fabled.cmd;

import net.md_5.bungee.api.ChatColor;
import org.bukkit.Bukkit;
import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import studio.magemonkey.codex.mccore.commands.CommandManager;
import studio.magemonkey.codex.mccore.commands.ConfigurableCommand;
import studio.magemonkey.codex.mccore.config.CustomFilter;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.enums.ExpSource;
import studio.magemonkey.fabled.api.player.PlayerClass;
import studio.magemonkey.fabled.api.player.PlayerData;
import studio.magemonkey.fabled.data.Settings;
import studio.magemonkey.fabled.manager.CmdManager;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CmdLevelTest {
    private ConfigurableCommand classCmd;
    private JavaPlugin          plugin;
    private CmdLevel            command;
    private Player              player;
    private Player              targetPlayer;
    private PlayerData          playerData;
    private PlayerClass         playerClass;

    private MockedStatic<Bukkit>         bukkitMock;
    private MockedStatic<Fabled>         fabledMock;
    private MockedStatic<CommandManager> commandManager;
    private MockedStatic<CmdManager>     cmdManager;

    @BeforeEach
    void setUp() {
        classCmd = mock(ConfigurableCommand.class);
        plugin = mock(JavaPlugin.class);
        command = new CmdLevel();
        player = mock(Player.class);
        targetPlayer = mock(Player.class);

        when(player.isOnline()).thenReturn(true);
        when(player.getPlayer()).thenReturn(player);
        when(targetPlayer.isOnline()).thenReturn(true);
        when(targetPlayer.getPlayer()).thenReturn(targetPlayer);

        bukkitMock = mockStatic(Bukkit.class);
        when(Bukkit.getOfflinePlayer("not-a-player")).thenReturn(null);
        when(Bukkit.getOfflinePlayer("player")).thenReturn(targetPlayer);
        fabledMock = mockStatic(Fabled.class);

        Fabled fabled = mock(Fabled.class);
        when(Fabled.inst()).thenReturn(fabled);

        commandManager = mockStatic(CommandManager.class);
        cmdManager = mockStatic(CmdManager.class);

        cmdManager.when(() -> CmdManager.join(any(String[].class), anyInt(), anyInt()))
                .thenReturn("player");

        Settings settings = mock(Settings.class);
        when(Fabled.getSettings()).thenReturn(settings);
        when(settings.isWorldEnabled(nullable(World.class))).thenReturn(true);

        playerData = mock(PlayerData.class);
        when(Fabled.getData(any(Player.class))).thenReturn(playerData);

        playerClass = mock(PlayerClass.class);
        when(playerData.getClass(anyString())).thenReturn(playerClass);

        when(playerData.giveLevels(anyInt(), any(ExpSource.class))).thenReturn(true);
    }

    @AfterEach
    void tearDown() {
        bukkitMock.close();
        fabledMock.close();
        commandManager.close();
        cmdManager.close();
    }

    @Nested
    class CmdLevelExecuteTests {
        @Test
        void execute_noArgs() {
            command.execute(classCmd, plugin, player, new String[]{});

            commandManager.verify(() -> CommandManager.displayUsage(classCmd, player));
        }

        @Test
        void execute_invalidTarget() {
            command.execute(classCmd, plugin, player, new String[]{
                    "not-a-player", "5"
            });

            verify(classCmd).sendMessage(eq(player), eq("not-player"),
                    eq(ChatColor.RED + "That is not a valid player name"));
        }

        @Test
        void execute_plainLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "5"
            });

            verify(playerData).giveLevels(5, ExpSource.COMMAND);
            verify(classCmd).sendMessage(eq(player), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_negativeLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "-5"
            });

            verify(playerData).loseLevels(5);
            verify(classCmd).sendMessage(eq(player), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_targetPlayer() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "5"
            });

            verify(playerData).giveLevels(5, ExpSource.COMMAND);
            verify(classCmd).sendMessage(eq(targetPlayer), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
            verify(classCmd).sendMessage(eq(player), eq("gave-level"),
                    eq(ChatColor.DARK_GREEN + "You have given " +
                            ChatColor.GOLD + "{player} {level} levels"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_targetPlayerNegativeLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "-5"
            });

            verify(playerData).loseLevels(5);
            verify(classCmd).sendMessage(eq(targetPlayer), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
            verify(classCmd).sendMessage(eq(player), eq("gave-level"),
                    eq(ChatColor.DARK_GREEN + "You have given " +
                            ChatColor.GOLD + "{player} {level} levels"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        // Class-based modifications
        @Test
        void execute_classLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "5", "class"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd).sendMessage(eq(player), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_classNegativeLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "-5", "class"
            });

            verify(playerClass).loseLevels(5);
            verify(classCmd).sendMessage(eq(player), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_playerClassLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "5", "class"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd).sendMessage(eq(player), eq("gave-level"),
                    eq(ChatColor.DARK_GREEN + "You have given " +
                            ChatColor.GOLD + "{player} {level} levels"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
            verify(classCmd).sendMessage(eq(targetPlayer), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        @Test
        void execute_playerClassNegativeLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "-5", "class"
            });

            verify(playerClass).loseLevels(5);
            verify(classCmd).sendMessage(eq(player), eq("gave-level"),
                    eq(ChatColor.DARK_GREEN + "You have given " +
                            ChatColor.GOLD + "{player} {level} levels"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
            verify(classCmd).sendMessage(eq(targetPlayer), eq("received-level"),
                    eq(ChatColor.DARK_GREEN + "You have received " +
                            ChatColor.GOLD + "{level} levels " +
                            ChatColor.DARK_GREEN + "from " +
                            ChatColor.GOLD + "{player}"),
                    any(CustomFilter.class),
                    any(CustomFilter.class));
        }

        // Silent mode
        @Test
        void execute_silent() {
            command.execute(classCmd, plugin, player, new String[]{
                    "5", "-s"
            });

            verify(playerData).giveLevels(5, ExpSource.COMMAND);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }

        @Test
        void execute_silentTargetPlayer() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "5", "-s"
            });

            verify(playerData).giveLevels(5, ExpSource.COMMAND);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }

        @Test
        void execute_silentClassLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "5", "class", "-s"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }

        @Test
        void execute_silentPlayerClassLevels() {
            command.execute(classCmd, plugin, player, new String[]{
                    "player", "5", "class", "-s"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }

        @Test
        void execute_silentFirst() {
            command.execute(classCmd, plugin, player, new String[]{
                    "-s", "player", "5", "class"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }

        @Test
        void execute_silentInOtherSpot() {
            command.execute(classCmd, plugin, player, new String[]{
                    "5", "-s", "class"
            });

            verify(playerClass).giveLevels(5);
            verify(classCmd, never()).sendMessage(any(), any(), any(), any(), any());
        }
    }

    @Nested
    class CmdLevelTabCompleteTests {
        private MockedStatic<ConfigurableCommand> configurableCommand;

        @BeforeEach
        void setUp() {
            configurableCommand = mockStatic(ConfigurableCommand.class);
            configurableCommand.when(() -> ConfigurableCommand.getPlayerTabCompletions(any(), anyString()))
                    .thenReturn(List.of("player", "player2"));
            configurableCommand.when(() -> ConfigurableCommand.getTabCompletions(anyList(), any(String[].class)))
                    .thenCallRealMethod();

            fabledMock.when(Fabled::getGroups).thenReturn(List.of("class"));
        }

        @AfterEach
        void tearDown() {
            configurableCommand.close();
        }

        @Test
        void tabComplete_noArgs() {
            List<String> completions = command.onTabComplete(player, classCmd, "level", new String[]{""});

            assertEquals(List.of("player", "player2", "<level>"), completions);
        }

        @Test
        void tabComplete_secondArg() {
            List<String> completions = command.onTabComplete(player, classCmd, "level", new String[]{"player", ""});

            assertEquals(List.of("<level>"), completions);
        }

        @Test
        void tabComplete_firstNumber() {
            List<String> completions = command.onTabComplete(player, classCmd, "level", new String[]{"5", ""});

            assertEquals(List.of("class"), completions);
        }

        @Test
        void tabComplete_playerWithNumber() {
            List<String> completions = command.onTabComplete(player, classCmd, "level", new String[]{"player", "5", ""});

            assertEquals(List.of("class"), completions);
        }
    }
}