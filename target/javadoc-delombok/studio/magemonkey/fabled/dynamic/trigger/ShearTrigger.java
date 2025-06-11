package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.EntityType;
import org.bukkit.entity.LivingEntity;
import org.bukkit.event.player.PlayerShearEntityEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

import java.util.List;
import java.util.Locale;

public class ShearTrigger implements Trigger<PlayerShearEntityEvent> {

    @Override
    public String getKey() {
        return "SHEAR";
    }

    @Override
    public Class<PlayerShearEntityEvent> getEvent() {return PlayerShearEntityEvent.class;}

    @Override
    public boolean shouldTrigger(PlayerShearEntityEvent event, int level, Settings settings) {
        List<String> types    = settings.getStringList("types");
        boolean      inverted = settings.getBool("blacklist", false);
        if (!types.isEmpty() && !types.get(0).equalsIgnoreCase("Any")) {
            for (String type : types) {
                EntityType entityType = EntityType.valueOf(type.toUpperCase(Locale.US));
                if (event.getEntity().getType() == entityType)
                    return !inverted;
            }
            return inverted;
        }

        return !inverted;
    }

    @Override
    public void setValues(PlayerShearEntityEvent event, final CastData data) {

    }

    @Override
    public LivingEntity getCaster(PlayerShearEntityEvent event) {
        return (LivingEntity) event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PlayerShearEntityEvent event, final Settings settings) {
        boolean targetCaster = settings.getBool("target", true);
        return targetCaster ? event.getPlayer() : (LivingEntity) event.getEntity();
    }

}