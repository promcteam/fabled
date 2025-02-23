package studio.magemonkey.fabled.shield;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class ShieldEffect {
    private final String classifier;
    private final double amount;
    private       long   expiration;
    private       double percent = 1;

    private double taken;

    public ShieldEffect(String classifier, double amount, double percent, long expiration) {
        this(classifier, amount);
        this.percent = percent;
        this.expiration = expiration;
    }

    /**
     * Applies damage to the shield effect, first reducing the damage by the percent value.
     * If the shield does not absorb all the damage, the remaining damage is returned.
     *
     * @param amount the amount of damage to apply
     * @return the remaining damage that was not absorbed by the shield
     */
    public double damage(double amount) {
        double modified = amount * percent;
        double actual   = Math.min(modified, getRemaining());
        double diff     = modified - actual;

        taken += actual;
        return diff;
    }

    public double getRemaining() {
        return amount - taken;
    }

    public boolean isExhausted() {
        return taken >= amount;
    }

    public boolean isExpired() {
        return expiration > 0 && System.currentTimeMillis() > expiration;
    }

    /**
     * Extends the expiration time of the shield effect by the given duration.
     *
     * @param duration the duration to extend the expiration time by
     */
    public void extend(long duration) {
        setExpiration(getExpiration() + duration);
    }
}
