package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.Material;
import org.bukkit.entity.LivingEntity;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.block.Block;
import org.bukkit.inventory.ItemStack;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

import java.util.List;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class StripLogTrigger implements Trigger<PlayerInteractEvent> {

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "STRIP_LOG";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<PlayerInteractEvent> getEvent() {
        return PlayerInteractEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final PlayerInteractEvent event, final int level, final Settings settings) {
        if (event.getAction() != Action.RIGHT_CLICK_BLOCK) return false;

        Block block = event.getClickedBlock();
        ItemStack item = event.getItem();

        if (block == null || item == null) return false;
        if (!item.getType().toString().endsWith("_AXE")) return false;

        final List<String> types = settings.getStringList("material");
        final String blockName = block.getType().name();

        return types.isEmpty()
                || types.contains("Any")
                || types.stream().anyMatch(mat -> blockName.equalsIgnoreCase(mat.replace(' ', '_')));
    }


    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final PlayerInteractEvent event, final CastData data) {
        data.put("api-block-type", event.getClickedBlock().getType().name());
        data.put("api-block-loc", event.getClickedBlock().getLocation());
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final PlayerInteractEvent event) {
        return event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PlayerInteractEvent event, final Settings settings) {
        return event.getPlayer();
    }
    
}
