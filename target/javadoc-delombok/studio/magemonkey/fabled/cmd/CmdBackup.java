/**
 * Fabled
 * studio.magemonkey.fabled.cmd.CmdBackup
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
package studio.magemonkey.fabled.cmd;

import org.bukkit.command.CommandSender;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitRunnable;
import studio.magemonkey.codex.mccore.commands.ConfigurableCommand;
import studio.magemonkey.codex.mccore.commands.IFunction;
import studio.magemonkey.codex.mccore.config.Filter;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.data.sql.SQLManager;

/**
 * Backs up SQL data into local config files
 */
public class CmdBackup implements IFunction {
    private static final String BACKUP = "backup";
    private static final String FAILED = "failed";
    private static final String DONE   = "done";

    /**
     * Executes the command
     *
     * @param command owning command
     * @param plugin  plugin reference
     * @param sender  sender of the command
     * @param args    arguments
     */
    @Override
    public void execute(ConfigurableCommand command, Plugin plugin, CommandSender sender, String[] args) {
        final Fabled api = (Fabled) plugin;
        command.sendMessage(sender, BACKUP, "&2Starting backup asynchronously...");
        new BackupTask(api, command, sender).runTaskAsynchronously(api);
    }

    /**
     * The task for backing up SQL data
     */
    private class BackupTask extends BukkitRunnable {
        private final ConfigurableCommand cmd;
        private final Fabled              api;
        private final CommandSender       sender;

        /**
         * @param api Fabled reference
         */
        BackupTask(Fabled api, ConfigurableCommand cmd, CommandSender sender) {
            this.api = api;
            this.cmd = cmd;
            this.sender = sender;
        }

        /**
         * Runs the backup task, backing up the entire SQL database locally
         */
        @Override
        public void run() {
            int count = SQLManager.players().backUpData();
            cmd.sendMessage(sender,
                    DONE,
                    "&2SQL database backup has finished with {amount} entries backed up",
                    Filter.AMOUNT.setReplacement(count + ""));
        }
    }
}
