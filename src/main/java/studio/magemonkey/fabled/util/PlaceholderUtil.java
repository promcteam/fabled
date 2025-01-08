package studio.magemonkey.fabled.util;

import org.bukkit.ChatColor;
import org.bukkit.OfflinePlayer;
import org.bukkit.entity.LivingEntity;
import org.jetbrains.annotations.NotNull;

import io.lumine.mythic.bukkit.utils.interfaces.TriFunction;
import studio.magemonkey.codex.util.AttributeUT;
import studio.magemonkey.codex.util.StringUT;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.classes.FabledClass;
import studio.magemonkey.fabled.api.player.PlayerAccounts;
import studio.magemonkey.fabled.api.player.PlayerClass;
import studio.magemonkey.fabled.api.player.PlayerData;
import studio.magemonkey.fabled.api.skills.Skill;
import studio.magemonkey.fabled.api.util.FlagManager;
import studio.magemonkey.fabled.cast.PlayerTextCastingData;
import studio.magemonkey.fabled.dynamic.DynamicSkill;
import studio.magemonkey.fabled.hook.PlaceholderAPIHook;
import studio.magemonkey.fabled.hook.PluginChecker;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class PlaceholderUtil {

    private static Map<String, TriFunction<OfflinePlayer, List<String>, Integer, String>> actions = new HashMap<>(); 
    
    static {
        // Class Placeholders
        actions.put("level", PlaceholderUtil::levelPlaceholder);
        actions.put("maxlevel", PlaceholderUtil::maxLevelPlaceholder);
        actions.put("totallevel", PlaceholderUtil::totalLevelPlaceholder);
        actions.put("totalmaxlevel", PlaceholderUtil::totalMaxLevelPlaceholder);
        actions.put("prefix", PlaceholderUtil::prefixPlaceholder);
        actions.put("fprefix", PlaceholderUtil::formatPrefixPlaceholder);
        actions.put("class", PlaceholderUtil::classPlaceholder);
        actions.put("fclass", PlaceholderUtil::formatClassPlaceholder);
        actions.put("parent", PlaceholderUtil::parentPlaceholder);
        actions.put("children", PlaceholderUtil::childrenPlaceholder);
        actions.put("fchildren", PlaceholderUtil::formatChildrenPlaceholder);
        // // Health Placeholders
        actions.put("health", PlaceholderUtil::healthPlaceholder);
        actions.put("fhealth", PlaceholderUtil::formatHealthPlaceholder);
        actions.put("maxhealth", PlaceholderUtil::maxHealthPlaceholder);
        actions.put("fmaxhealth", PlaceholderUtil::formatMaxHealthPlaceholder);
        actions.put("basehealth", PlaceholderUtil::baseHealthPlaceholder);
        actions.put("fbasehealth", PlaceholderUtil::formatBaseHealthPlaceholder);
        actions.put("healthat", PlaceholderUtil::healthAtPlaceholder);
        actions.put("fhealthat", PlaceholderUtil::formatHealthAtPlaceholder);
        actions.put("healthscale", PlaceholderUtil::healthScalePlaceholder);
        // // Mana Placeholders
        actions.put("mana", PlaceholderUtil::manaPlaceholder);
        actions.put("fmana", PlaceholderUtil::formatManaPlaceholder);
        actions.put("maxmana", PlaceholderUtil::maxManaPlaceholder);
        actions.put("fmaxmana", PlaceholderUtil::formatMaxManaPlaceholder);
        actions.put("mananame", PlaceholderUtil::manaNamePlaceholder);
        actions.put("fmananame", PlaceholderUtil::formatManaNamePlaceholder);
        actions.put("basemana", PlaceholderUtil::baseManaPlaceholder);
        actions.put("fbasemana", PlaceholderUtil::formatBaseManaPlaceholder);
        actions.put("manaregen", PlaceholderUtil::manaRegenPlaceholder);
        actions.put("fmanaregen", PlaceholderUtil::formatManaRegenPlaceholder);
        actions.put("manaat", PlaceholderUtil::manaAtPlaceholder);
        actions.put("fmanaat", PlaceholderUtil::formatManaAtPlaceholder);
        actions.put("manascale", PlaceholderUtil::manaScalePlaceholder);
        // // Leveling Placeholders
        actions.put("attribute", PlaceholderUtil::attributePlaceholder);
        actions.put("attributepoints", PlaceholderUtil::attributePointsPlaceholder);
        actions.put("currentexp", PlaceholderUtil::currentExpPlaceholder);
        actions.put("fcurrentexp", PlaceholderUtil::formatCurrentExpPlaceholder);
        actions.put("requiredexp", PlaceholderUtil::requiredExpPlaceholder);
        actions.put("frequiredexp", PlaceholderUtil::formatRequiredExpPlaceholder);
        actions.put("requiredexpat", PlaceholderUtil::requiredExperienceAtPlaceholder);
        actions.put("frequiredexpat", PlaceholderUtil::formatRequiredExperienceAtPlaceholder);
        actions.put("skillpoints", PlaceholderUtil::skillPointsPlaceholder);
        // // Accounts Placeholders
        actions.put("accounts", PlaceholderUtil::accountsPlaceholder);
        actions.put("accountlimit", PlaceholderUtil::accountLimitPlaceholder);
        actions.put("currentaccount", PlaceholderUtil::currentAccountPlaceholder);
        actions.put("accountinfo", PlaceholderUtil::accountInfoPlaceholder);
        // Variable Placeholders
        actions.put("flag", PlaceholderUtil::flagPlaceholder);
        actions.put("flagleft", PlaceholderUtil::flagleftPlaceholder);
        actions.put("value", PlaceholderUtil::valuePlaceholder);
        actions.put("fvalue", PlaceholderUtil::formatValuePlaceholder);
        // // SKill Placeholders
        actions.put("skilllevel", PlaceholderUtil::skillLevelPlaceholder);
        actions.put("casting", PlaceholderUtil::castingPlaceholder);
        actions.put("manacost", PlaceholderUtil::manaCostPlaceholder);
        actions.put("fmanacost", PlaceholderUtil::formatManaCostPlaceholder);
        actions.put("cooldown", PlaceholderUtil::cooldownPlaceholder);
        actions.put("fcooldown", PlaceholderUtil::formatCooldownPlaceholder);
        actions.put("cooldownleft", PlaceholderUtil::cooldownLeftPlaceholder);
        actions.put("fcooldownleft", PlaceholderUtil::formatCooldownLeftPlaceholder);
        actions.put("actionbar", PlaceholderUtil::actionBarPlaceholder);
        actions.put("actionbarmanacost", PlaceholderUtil::actionBarManaCostPlaceholder);
        actions.put("factionbarmanacost", PlaceholderUtil::formatActionBarManaCostPlaceholder);
        actions.put("actionbarcooldown", PlaceholderUtil::actionBarCooldownPlaceholder);
        actions.put("factionbarcooldown", PlaceholderUtil::formatActionBarCooldownPlaceholder);
        actions.put("actionbarcooldownleft", PlaceholderUtil::actionBarCooldownLeftPlaceholder);
        actions.put("factionbarcooldownleft", PlaceholderUtil::formatActionBarCooldownLeftPlaceholder);
    }

    @NotNull
    public static String colorizeAndReplace(@NotNull String str, OfflinePlayer player) {
        // If we have PlaceholderAPI, use it, otherwise we can default
        // to our internal supplied placeholders
        if (PluginChecker.isPlaceholderAPIActive()) {
            return StringUT.color(PlaceholderAPIHook.format(str, player.getPlayer()));
        }
    
        Pattern regex = Pattern.compile("%fabled_(.*?)%");
        String  formattedLine = str;
        Matcher matcher       = regex.matcher(str);
        while (matcher.find()) {
            String match = matcher.group(1);
            String value = replace(player, match);
            if (value != null) {
                formattedLine = formattedLine.replace("%fabled_" + match + "%", value);
            }
        }
        return StringUT.color(formattedLine);
    }

    @NotNull
    public static List<String> colorizeAndReplace(List<String> list, OfflinePlayer player) {
        return list.stream()
                .map(line -> colorizeAndReplace(line, player))
                .collect(Collectors.toList());
    }

    public static String replace(OfflinePlayer player, String identifier) {
        List<String> arguments = new ArrayList<String>(Arrays.asList(identifier.toLowerCase().strip().split("_")));
        String placeholder = arguments.remove(0);
        return actions.getOrDefault(placeholder, (a, b, c) -> {return null;}).apply(player, arguments, null);
    }

    // ** Class ** //
    // Returns the level of the current class in the specified group. 0 if not found.
    public static String levelPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getLevel() : playerData.getMainClass().getLevel());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the max level of the current class in the specified group. 0 if not found.
    public static String maxLevelPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getMaxLevel() : playerData.getMainClass().getData().getMaxLevel());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the total level of all classes. 0 if no classes are professed.
    public static String totalLevelPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
        Collection<PlayerClass> playerClasses = playerData.getClasses();
        int totalLevel = 0;
        for (PlayerClass playerClass : playerClasses) {
            totalLevel += playerClass.getLevel();
        }
        return String.valueOf(totalLevel);
    }

    // Returns the total max level of all classes.
    public static String totalMaxLevelPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
        Collection<PlayerClass> playerClasses = playerData.getClasses();
        int totalMaxLevel = 0;
        for (PlayerClass playerClass : playerClasses) {
            totalMaxLevel += playerClass.getData().getMaxLevel();
        }
        return String.valueOf(totalMaxLevel);
    }

    // Returns the Prefix of the current class in the specified group. Blank if not found.
    private static String prefixPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getPrefix() : playerData.getMainClass().getData().getPrefix());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the Prefix of the current class in the specified group without its color. Blank if not found.
    private static String formatPrefixPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return ChatColor.stripColor(group != null ? playerData.getClass(group).getData().getPrefix() : playerData.getMainClass().getData().getPrefix());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the Name of the current class in the specified group. Blank if not found.
    private static String classPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getName() : playerData.getMainClass().getData().getName());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the Name of the current Class in the specified group without its color. Blank if not found.
    private static String formatClassPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return ChatColor.stripColor(group != null ? playerData.getClass(group).getData().getName() : playerData.getMainClass().getData().getName());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the Name of the Parent Class in the specified group. Blank if not found.
    private static String parentPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getParent().getName() : playerData.getMainClass().getData().getParent().getName());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns all the Children of the current Class in the specified group. Emptry list if not found.
    private static String childrenPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            FabledClass playerClass = (group != null) ? playerData.getClass(group).getData() : playerData.getMainClass().getData();
            ArrayList<String> children = new ArrayList<String>();
            for (FabledClass classes: Fabled.getClasses().values()) {
                String classname = classes.getName();
                if (classes.hasParent()) {
                    if (classes.getParent().getName().equalsIgnoreCase(playerClass.getName())) {
                        children.add(classname);
                    }
                }
            }
            return children.toString();
        } catch (Exception e) {
            return "[]";
        }
    }

    // Returns all the Children of the current Class in the specified group formatted as a nice list. Blank if not found.
    private static String formatChildrenPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            FabledClass playerClass = (group != null) ? playerData.getClass(group).getData() : playerData.getMainClass().getData();
            ArrayList<String> children = new ArrayList<String>();
            for (FabledClass classes: Fabled.getClasses().values()) {
                String classname = classes.getName();
                if (classes.hasParent()) {
                    if (classes.getParent().getName().equalsIgnoreCase(playerClass.getName())) {
                        children.add(classname);
                    }
                }
            }
            return children.toString().replaceAll("(^\\[|\\]$)", "");
        } catch (Exception e) {
            return "";
        }
    }

    // ** Health ** //
    // Returns the current health of the player, as a decimal.
    private static String healthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            return String.valueOf(player.getPlayer().getHealth());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the current health of the player, as an integer.
    private static String formatHealthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            return String.valueOf((int) player.getPlayer().getHealth());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the max health of the player, as a decimal.
    private static String maxHealthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            return String.valueOf(player.getPlayer().getAttribute(AttributeUT.resolve("MAX_HEALTH")).getBaseValue());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the max health of the player, as an integer.
    private static String formatMaxHealthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            return String.valueOf((int) player.getPlayer().getAttribute(AttributeUT.resolve("MAX_HEALTH")).getBaseValue());
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the base health of the current class or class in the specified group. 0.0 if not found.
    private static String baseHealthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
        PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
        String group = arguments.isEmpty() ? null : String.join("_", arguments);
        return String.valueOf(group != null ? playerData.getClass(group).getData().getBaseHealth() : playerData.getMainClass().getData().getBaseHealth());
        } catch (Exception e) {
            return "0.0";
        } 
    }

    // Returns the base health of the current class or class in the specified group, as an integer. 0 if not found.
    private static String formatBaseHealthPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getBaseHealth() : (int) playerData.getMainClass().getData().getBaseHealth());
            } catch (Exception e) {
                return "0";
            } 
        }

    // Returns the health value of the current class or class in the specified group at a specific level. 0.0 if not found.
    private static String healthAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);  
            return String.valueOf(group != null ? playerData.getClass(group).getData().getHealth(level) : playerData.getMainClass().getData().getHealth(level));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the health value of the current class or class in the specified group at a specific level, as an integer. 0 if not found.
    private static String formatHealthAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);  
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getHealth(level) : (int) playerData.getMainClass().getData().getHealth(level));
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the value in which health scales per level of the current class or class in the specified group. 0.0 if not found.
    private static String healthScalePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getHealthScale() : (int) playerData.getMainClass().getData().getHealthScale());
        } catch (Exception e) {
            return "0.0";
        } 
    }

    // ** Mana ** //
    // Returns the amount of mana the player currently has. 0.0 if not found.
    private static String manaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = Fabled.getData(player);
            return String.valueOf(playerData.getMana());
        } catch (Exception e) {
            return "0";
        }
    } 

    // Returns the amount of mana the player currently has, as an integer. 0 if not found.
    private static String formatManaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = Fabled.getData(player);
            return String.valueOf((int) playerData.getMana());
        } catch (Exception e) {
            return "0";
        }
    } 

    // Returns the maximum amount of mana the player currently has. 0.0 if not found.
    private static String maxManaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = Fabled.getData(player);
            return String.valueOf(playerData.getMaxMana());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the maximum amount of mana the player currently has, as an integer. 0 if not found.
    private static String formatMaxManaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = Fabled.getData(player);
            return String.valueOf((int) playerData.getMaxMana());
        } catch (Exception e) {
            return "0";
        }
    } 

    // Returns the mana name of the current class or class in the specified group. Blank if not found.
    private static String manaNamePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getManaName() : playerData.getMainClass().getData().getManaName());
        } catch (Exception e) {
            return "";
        } 
    }

    // Returns the mana name of the current class or class in the specified group, wihout its color. Blank if not found.
    private static String formatManaNamePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return ChatColor.stripColor(group != null ? playerData.getClass(group).getData().getManaName() : playerData.getMainClass().getData().getManaName());
        } catch (Exception e) {
            return "";
        } 
    }

    // Returns the base mana of the current class or class in the specified group. 0.0 if not found.
    private static String baseManaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getBaseMana() : playerData.getMainClass().getData().getBaseMana());
        } catch (Exception e) {
            return "0.0";
        } 
    }

    // Returns the base mana of the current class or class in the specified group, as an integer. 0 if not found.
    private static String formatBaseManaPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getBaseMana() : (int) playerData.getMainClass().getData().getBaseMana());
        } catch (Exception e) {
            return "0";
        } 
    }

    // Returns the mana regen rate of the current class or class in the specified group. 0.0 if not found.
    private static String manaRegenPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getManaRegen() : playerData.getMainClass().getData().getManaRegen());
        } catch (Exception e) {
            return "0.0";
        } 
    }

    // Returns the mana regen rate of the current class or class in the specified group, as an integer. 0 if not found.
    private static String formatManaRegenPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getManaRegen() : (int) playerData.getMainClass().getData().getManaRegen());
        } catch (Exception e) {
            return "0";
        } 
    }

    // Returns the mana value of the current class or class in the specified group at a specific level. 0.0 if not found.
    private static String manaAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);  
            return String.valueOf(group != null ? playerData.getClass(group).getData().getMana(level) : playerData.getMainClass().getData().getMana(level));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the health value of the current class or class in the specified group at a specific level, as an integer. 0 if not found.
    private static String formatManaAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);  
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getMana(level) : (int) playerData.getMainClass().getData().getMana(level));
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the value in which mana scales per level of the current class or class in the specified group. 0.0 if not found.
    private static String manaScalePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getManaScale() : playerData.getMainClass().getData().getManaScale());
        } catch (Exception e) {
            return "0.0";
        } 
    }

    // ** Leveling ** //
    // Return how many points the player has in the specified. If no attribute is specified, all invested points are shown. 0 if not found.
    private static String attributePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String attribute = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(attribute != null ? playerData.getAttribute(attribute) : playerData.getInvestedAttributes().values().stream().mapToInt(Integer::intValue).sum());
        } catch (Exception e) {
            return "0";
        }
    } 

    // Return the number of unspent attribute points. 0 if not found.
    private static String attributePointsPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            return String.valueOf(playerData.getAttributePoints());
        } catch (Exception e) {
            return "0";
        }
    } 

    // Returns the current experience point for the specified group. 0.0 if not found.
    private static String currentExpPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getExp() : playerData.getMainClass().getExp());
        } catch (Exception e) {
            return "0.0";
        }
    } 

    // Returns the current experience points for the specified group as an integer. 0 if not found.
    private static String formatCurrentExpPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getExp() : (int) playerData.getMainClass().getExp());
        } catch (Exception e) {
            return "0";
        }
    } 
    
    // Returns the required experience for the next level for the specified group. 0.0 if not found.
    private static String requiredExpPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getRequiredExp() : playerData.getMainClass().getRequiredExp());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the required experience for the next level for the specified group as an integer. 0 if not found.
    private static String formatRequiredExpPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getRequiredExp() : (int) playerData.getMainClass().getRequiredExp());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the requires experience for the specified level for a given group. 0.0 if not found.
    private static String requiredExperienceAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getData().getRequiredExp(level) : playerData.getMainClass().getData().getRequiredExp(level));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the requires experience for the specified level for a given group as an integer. 0 if not found.
    private static String formatRequiredExperienceAtPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            int level = Integer.parseInt(arguments.remove(0));
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? (int) playerData.getClass(group).getData().getRequiredExp(level) : (int) playerData.getMainClass().getData().getRequiredExp(level));
        } catch (Exception e) {
            return "0";
        }
    }
    
    // Returns the skill points for the specified group. 0 if not found.
    private static String skillPointsPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String group = arguments.isEmpty() ? null : String.join("_", arguments);
            return String.valueOf(group != null ? playerData.getClass(group).getPoints() : playerData.getMainClass().getPoints());
        } catch (Exception e) {
            return "0";
        }
    }

    //Accounts
    // Returns the number of accounts the player currently has. 0 if not available.
    private static String accountsPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerAccounts playerData = Fabled.getPlayerAccounts(player);
            return String.valueOf(playerData.getAllData().size());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the maximum number of accounts the player can has. 0 if not available.
    private static String accountLimitPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerAccounts playerData = Fabled.getPlayerAccounts(player);
            return String.valueOf(playerData.getAccountLimit());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the value of the current account the player is using. 0 if not available.
    private static String currentAccountPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerAccounts playerData = Fabled.getPlayerAccounts(player);
            return String.valueOf(playerData.getActiveId());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the value of the specified placeholder for a specific account.
    // Proper usage %fabled_accountInfo_[id]_[fabled placeholder]%.
    // Example %fabled_accountInfo_1_class_race% 
    // This will return the class name of the race group for account number 1.
    private static String accountInfoPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        Integer id = Integer.valueOf(arguments.remove(0));
        return actions.getOrDefault(arguments.remove(0), (a, b, c) -> {return null;}).apply(player, arguments, id);
    }

    //Variables
    // Retruns true if this flag is set, false otherwise.
    private static String flagPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            String flag = String.join("_", arguments);
            return String.valueOf(FlagManager.hasFlag((LivingEntity) player, flag));
        } catch (Exception e) {
            return "false";
        }
    } 

    // Returns the remaining time the flag has. 0 if not set.
    private static String flagleftPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            String flag = String.join("_", arguments);
            return String.valueOf(FlagManager.getTimeLeft((LivingEntity) player, flag));
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the value stored. 0.0 if not found.
    private static String valuePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            CastData data = DynamicSkill.getCastData((LivingEntity) player);
            String value = String.join("_", arguments);
            return String.valueOf(data.getDouble(value));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the formatted value stored. 0 if not found.
    private static String formatValuePlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            CastData data = DynamicSkill.getCastData((LivingEntity) player);
            String value = String.join("_", arguments);
            return String.valueOf((int) data.getDouble(value));
        } catch (Exception e) {
            return "0";
        }
    }

    // Skills
    // Returns the level of the specified skill. 0 if not found.
    private static String skillLevelPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skill = String.join("_",arguments);
            return String.valueOf(playerData.getSkill(skill).getLevel());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns true if the player is skill casting. False otherwise.
    private static String castingPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = playerData.getTextCastingData();
            return String.valueOf(skillData.isCasting());
        } catch (Exception e) {
            return "false";
        }
    }

    // Returns the mana cost of a specified skill. 0.0 if not found.
    private static String manaCostPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skill = String.join("_",arguments);
            return String.valueOf(playerData.getSkill(skill).getManaCost());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the mana cost of a specified skill, as an integer. 0 if not found.
    private static String formatManaCostPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skill = String.join("_",arguments);
            return String.valueOf((int) playerData.getSkill(skill).getManaCost());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the cooldown of a skill. 0.0 if not found.
    private static String cooldownPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skillName = String.join("_",arguments);
            Skill skill = playerData.getSkill(skillName).getData();
            return String.valueOf(skill.getCooldown(playerData.getSkillLevel(skillName)));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the cooldown of a skill, as an integer. 0 if not found.
    private static String formatCooldownPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skillName = String.join("_",arguments);
            Skill skill = playerData.getSkill(skillName).getData();
            return String.valueOf((int) skill.getCooldown(playerData.getSkillLevel(skillName)));
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the cooldown remaining of a skill. 0.0 if not found.
    private static String cooldownLeftPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skill = String.join("_",arguments);
            return String.valueOf(playerData.getSkill(skill).getCooldownLeft());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the cooldown of a skill, as an integer. 0 if not found.
    private static String formatCooldownLeftPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            String skill = String.join("_",arguments);
            return String.valueOf((int) playerData.getSkill(skill).getCooldownLeft());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the name of the skill found in a specified slot if the ACTION_BAR is being used. Must be 1-8. Blank if not found.
    private static String actionBarPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = playerData.getTextCastingData();
            String skillName = skillData.getSkill(Integer.parseInt(arguments.remove(0)));
            return String.valueOf(skillName != null ? skillName : "");
        } catch (Exception e) {
            return "";
        }
    }

    // Returns the mana cost of the skill found in a specified slot if the ACTION_BAR is being used. Must be 1-8. 0.0 if not found.
    private static String actionBarManaCostPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
            String slot = String.valueOf(arguments.remove(0));
            String skill = skillData.getSkill(Integer.parseInt(slot));
            return String.valueOf(playerData.getSkill(skill).getManaCost());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the mana cost of the skill found in a specified slot if the ACTION_BAR is being used. Must be 1-8. 0 if not found.
    private static String formatActionBarManaCostPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
            String slot = String.valueOf(arguments.remove(0));
            String skill = skillData.getSkill(Integer.parseInt(slot));
            return String.valueOf((int) playerData.getSkill(skill).getManaCost());
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the cooldown of the skill found in a specified slot if the ACTION_BAR is being used. Must be 1-8. 0.0 if not found.
    private static String actionBarCooldownPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
            String slot = String.valueOf(arguments.remove(0));
            String skillName = skillData.getSkill(Integer.parseInt(slot));
            Skill skill = playerData.getSkill(skillName).getData();
            return String.valueOf(skill.getCooldown(playerData.getSkillLevel(skillName)));
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the cooldown of the skill found in a specified slot if the ACTION_BAR is being used, as an integer. Must be 1-8. 0 if not found.
    private static String formatActionBarCooldownPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
            String slot = String.valueOf(arguments.remove(0));
            String skillName = skillData.getSkill(Integer.parseInt(slot));
            Skill skill = playerData.getSkill(skillName).getData();
            return String.valueOf((int) skill.getCooldown(playerData.getSkillLevel(skillName)));
        } catch (Exception e) {
            return "0";
        }
    }

    // Returns the remaining cooldown of the skill found in a specified slot if the ACTION_BAR is being used. Must be 1-8. 0.0 if not found.
    private static String actionBarCooldownLeftPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
        PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
        PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
        String slot = String.valueOf(arguments.remove(0));
        String skill = skillData.getSkill(Integer.parseInt(slot));
        return String.valueOf(playerData.getSkill(skill).getCooldownLeft());
        } catch (Exception e) {
            return "0.0";
        }
    }

    // Returns the remaining cooldown of the skill found in a specified slot if the ACTION_BAR is being used, as an integer. Must be 1-8. 0 if not found.
    private static String formatActionBarCooldownLeftPlaceholder(OfflinePlayer player, List<String> arguments, Integer accountID){
        try {
            PlayerData playerData = (accountID != null) ? Fabled.getPlayerAccounts(player).getData(accountID) : Fabled.getData(player);
            PlayerTextCastingData skillData = Fabled.getData(player).getTextCastingData();
            String slot = String.valueOf(arguments.remove(0));
            String skill = skillData.getSkill(Integer.parseInt(slot));
            return String.valueOf((int) playerData.getSkill(skill).getCooldownLeft());
            } catch (Exception e) {
                return "0";
            }
        }

}
