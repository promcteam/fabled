package studio.magemonkey.fabled.cmd;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.OfflinePlayer;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;
import org.bukkit.entity.Player;
import org.bukkit.plugin.Plugin;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import studio.magemonkey.codex.mccore.commands.CommandManager;
import studio.magemonkey.codex.mccore.commands.ConfigurableCommand;
import studio.magemonkey.codex.mccore.commands.IFunction;
import studio.magemonkey.codex.mccore.config.Filter;
import studio.magemonkey.codex.mccore.config.parse.NumberParser;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.enums.ExpSource;
import studio.magemonkey.fabled.api.player.PlayerClass;
import studio.magemonkey.fabled.api.player.PlayerData;
import studio.magemonkey.fabled.language.RPGFilter;
import studio.magemonkey.fabled.manager.CmdManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Fabled
 * studio.magemonkey.fabled.cmd.CmdExp
 * <p>
 * The MIT License (MIT)
 * <p>
 * Copyright (c) 2024 MageMonkeyStudio
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software") to deal
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
public class CmdExp implements IFunction, TabCompleter {
    public static final Pattern IS_NUMBER = Pattern.compile("-?[0-9]+");
    public static final Pattern IS_BOOL   = Pattern.compile("(true)|(false)");

    private static final String NOT_PLAYER = "not-player";
    private static final String GAVE_EXP   = "gave-exp";
    private static final String TOOK_EXP   = "took-exp";
    private static final String DISABLED   = "world-disabled";

    /**
     * Runs the command
     *
     * @param cmd    command that was executed
     * @param plugin plugin reference
     * @param sender sender of the command
     * @param args   argument list
     */
    @Override
    public void execute(ConfigurableCommand cmd, Plugin plugin, CommandSender sender, String... args) {
        boolean silent = isSilent(args);
        if (silent) {
            args = Arrays.stream(args)
                    .filter(arg -> !IS_BOOL.matcher(arg).matches() && !arg.equalsIgnoreCase("-s")
                            && !arg.equalsIgnoreCase("--silent"))
                    .toArray(String[]::new);
        }

        int           numberIndex = getNumberIndex(args);
        OfflinePlayer target;
        if (!(sender instanceof Player)) {
            if (args.length < 2) {
                CommandManager.displayUsage(cmd, sender);
                return;
            }

            target = Bukkit.getOfflinePlayer(args[0]);
        } else {
            // Disabled world
            if (!Fabled.getSettings().isWorldEnabled(((Player) sender).getWorld()) && args.length == 1) {
                cmd.sendMessage(sender, DISABLED, "&4You cannot use this command in this world");
                return;
            }

            if (args.length < 1) {
                CommandManager.displayUsage(cmd, sender);
                return;
            }

            target = numberIndex == 0 ? (OfflinePlayer) sender : Bukkit.getOfflinePlayer(args[0]);
        }

        // Only can show info of a player so console needs to provide a name
        if (target == null) {
            cmd.sendMessage(sender, NOT_PLAYER, ChatColor.RED + "That is not a valid player name");
            return;
        }
        // Get the player data
        PlayerData data = Fabled.getData(target);

        // Parse the experience
        double amount = NumberParser.parseDouble(args[numberIndex]);
        // Invalid amount of experience
        if (amount == 0) {
            return;
        }

        int lastArg = args.length - 1;

        // Give experience to a specific class group
        if (numberIndex + 1 <= lastArg) {
            PlayerClass playerClass = data.getClass(CmdManager.join(args, numberIndex + 1, lastArg));
            if (playerClass == null) {
                return;
            }

            if (amount > 0) {
                playerClass.giveExp(amount, ExpSource.COMMAND, !silent);
                if (!silent && target != sender) {
                    cmd.sendMessage(
                            sender,
                            GAVE_EXP,
                            ChatColor.DARK_GREEN + "You have given " + ChatColor.GOLD
                                    + "{player} {exp}{class} experience",
                            Filter.PLAYER.setReplacement(target.getName()),
                            RPGFilter.EXP.setReplacement("" + amount),
                            RPGFilter.CLASS.setReplacement(' ' + playerClass.getData().getGroup()));
                }
            } else {
                playerClass.loseExp(-amount, false, true);
                if (!silent && target != sender) {
                    cmd.sendMessage(
                            sender,
                            TOOK_EXP,
                            ChatColor.DARK_GREEN + "You have taken " + ChatColor.GOLD + "{exp}{class} experience "
                                    + ChatColor.DARK_GREEN + "from " + ChatColor.GOLD + "{player}",
                            Filter.PLAYER.setReplacement(target.getName()),
                            RPGFilter.EXP.setReplacement("" + -amount),
                            RPGFilter.CLASS.setReplacement(' ' + playerClass.getData().getGroup()));
                }
            }
        }

        // Give experience
        else {
            if (amount > 0) {
                data.giveExp(amount, ExpSource.COMMAND, !silent);
                if (!silent) {
                    if (target != sender) {
                        cmd.sendMessage(
                                sender,
                                GAVE_EXP,
                                ChatColor.DARK_GREEN + "You have given " + ChatColor.GOLD
                                        + "{player} {exp}{class} experience",
                                Filter.PLAYER.setReplacement(target.getName()),
                                RPGFilter.EXP.setReplacement("" + amount),
                                RPGFilter.CLASS.setReplacement(""));
                    }
                }
            } else {
                data.loseExp(-amount, false, true);
                if (!silent && target != sender) {
                    cmd.sendMessage(
                            sender,
                            TOOK_EXP,
                            ChatColor.DARK_GREEN + "You have taken " + ChatColor.GOLD + "{exp}{class} experience "
                                    + ChatColor.DARK_GREEN + "from " + ChatColor.GOLD + "{player}",
                            Filter.PLAYER.setReplacement(target.getName()),
                            RPGFilter.EXP.setReplacement("" + -amount),
                            RPGFilter.CLASS.setReplacement(""));
                }
            }
        }
    }

    private int getNumberIndex(String[] args) {
        for (int i = 0; i < args.length; i++) {
            if (IS_NUMBER.matcher(args[i]).matches()) {
                return i;
            }
        }

        return -1;
    }

    private boolean isSilent(String[] args) {
        if (args == null || args.length == 0) return false;

        if (IS_BOOL.matcher(args[args.length - 1]).matches()) {
            return !Boolean.parseBoolean(args[args.length - 1]);
        }

        // If any arg is `-s` or `--silent`, return true
        for (String arg : args) {
            if (arg.equalsIgnoreCase("-s") || arg.equalsIgnoreCase("--silent")) {
                return true;
            }
        }

        return false;
    }

    @Override
    @Nullable
    public List<String> onTabComplete(@NotNull CommandSender commandSender,
                                      @NotNull Command command,
                                      @NotNull String s,
                                      @NotNull String[] args) {
        // Filter -s and --silent out of the args
        if (args.length > 0) {
            args = Arrays.stream(args)
                    .filter(arg -> !arg.equalsIgnoreCase("-s") && !arg.equalsIgnoreCase("--silent"))
                    .toArray(String[]::new);
        }

        if (args.length == 1) {
            List<String> list = new ArrayList<>(
                    ConfigurableCommand.getPlayerTabCompletions(commandSender, args[0]));
            list.add("<exp>");
            return list;
        } else if (args.length > 1) {
            // If the first arg is a number, the second arg could be a player or a class
            int numberIndex = getNumberIndex(args);

            if (numberIndex == -1) return List.of("<exp>");
            return ConfigurableCommand.getTabCompletions(Fabled.getGroups(),
                    Arrays.copyOfRange(args, numberIndex + 1, args.length));
        }
        return null;
    }
}
