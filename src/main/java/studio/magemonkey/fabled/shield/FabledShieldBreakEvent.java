package studio.magemonkey.fabled.shield;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import org.bukkit.entity.LivingEntity;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.jetbrains.annotations.NotNull;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class FabledShieldBreakEvent extends Event {
    private static final HandlerList handlers = new HandlerList();

    private final LivingEntity entity;
    private final ShieldEffect effect;

    @Override
    public @NotNull HandlerList getHandlers() {
        return handlers;
    }

    public static HandlerList getHandlerList() {
        return handlers;
    }
}
