package studio.magemonkey.fabled.dynamic.trigger;

import java.util.List;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.player.PlayerHarvestBlockEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

public class HarvestTrigger implements Trigger<PlayerHarvestBlockEvent> {

    @Override
    public String getKey() {
        return "HARVEST";
    }

    @Override
    public Class<PlayerHarvestBlockEvent> getEvent() {return PlayerHarvestBlockEvent.class;}

    @Override
    public boolean shouldTrigger(PlayerHarvestBlockEvent event, int level, Settings settings) {
        final List<String> types = settings.getStringList("material");
        return types.isEmpty() || types.contains("Any")
                || types.stream()
                .anyMatch(mat -> event.getHarvestedBlock().getType().name().equalsIgnoreCase(mat.replace(' ', '_')));
    }

    @Override
    public void setValues(PlayerHarvestBlockEvent event, final CastData data) {
        data.put("api-block-type", event.getHarvestedBlock().getType().name());
        data.put("api-block-loc", event.getHarvestedBlock().getLocation());
    }

    @Override
    public LivingEntity getCaster(PlayerHarvestBlockEvent event) {
        return (LivingEntity) event.getPlayer();
    }

    @Override
    public LivingEntity getTarget(PlayerHarvestBlockEvent event, Settings settings) {
        return (LivingEntity) event.getPlayer();
    }

}