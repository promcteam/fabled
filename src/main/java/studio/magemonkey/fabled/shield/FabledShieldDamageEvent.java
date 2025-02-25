package studio.magemonkey.fabled.shield;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.bukkit.entity.LivingEntity;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class FabledShieldDamageEvent extends Event {
    private static final HandlerList handlers = new HandlerList();

    private final LivingEntity entity;
    private final ShieldEffect effect;
    private final double       damage;

    @Override
    public HandlerList getHandlers() {
        return handlers;
    }

    public static HandlerList getHandlerList() {
        return handlers;
    }
}
