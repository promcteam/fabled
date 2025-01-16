package studio.magemonkey.fabled.api.event;

import lombok.Getter;
import org.bukkit.entity.LivingEntity;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.jetbrains.annotations.NotNull;
import studio.magemonkey.fabled.api.util.Buff;

@Getter
public class BuffExpiredEvent extends Event {
    private static final HandlerList  handlers = new HandlerList();
    private final        Buff         buff;
    private final        String       key;
    private final        LivingEntity entity;

    public BuffExpiredEvent(LivingEntity entity, Buff buff, String key) {
        this.entity = entity;
        this.buff = buff;
        this.key = key;
    }

    @NotNull
    @Override
    public HandlerList getHandlers() {
        return handlers;
    }

    /**
     * @return gets the handlers for the event
     */
    public static HandlerList getHandlerList() {
        return handlers;
    }
}
