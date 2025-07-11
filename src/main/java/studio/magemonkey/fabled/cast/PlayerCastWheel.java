package studio.magemonkey.fabled.cast;

import lombok.Getter;
import studio.magemonkey.codex.util.StringUT;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.player.PlayerData;
import studio.magemonkey.fabled.api.player.PlayerSkill;

import java.util.ArrayList;

public class PlayerCastWheel {
    private final PlayerData player;
    private final ArrayList<PlayerSkill> skills = new ArrayList<PlayerSkill>();
    @Getter
    private boolean casting = false;
    private int index;

    public PlayerCastWheel(PlayerData data) {
        this.player = data;
        this.index = 0;
        this.skills.clear();

        for (PlayerSkill skill : data.getSkills()){
            if (skill.getData().canCast() && skill.isUnlocked()) skills.add(skill);
        }
    }

    public void validate(PlayerData data){
        for (PlayerSkill skill : data.getSkills()){
            if (skill.getData().canCast() && skill.isUnlocked()) skills.add(skill);
        }
    }

    /**
     * Adds a skill to the available skills, if castable
     *
     * @param skill skill to add
     */
    public void unlock(PlayerSkill skill) {
        if (skill.isUnlocked() && skill.getData().canCast())
            skills.add(skill);
    }

    public boolean isEmpty(){
        return skills.isEmpty();
    }

public String getMessage() {
    int size = skills.size();
    if (size == 0) return "";

    int currentIndex = index % size;
    if (currentIndex < 0) currentIndex += size; // Handle negatives

    String selectedSkill = StringUT.color(Fabled.getSettings().getWheelFormatSelectedSkill());
    String unselectedSkill = StringUT.color(Fabled.getSettings().getWheelFormatUnselectedSkill());
    String previousSeparator   = StringUT.color(Fabled.getSettings().getWheelFormatPreviousSeparator());
    String nextSeparator   = StringUT.color(Fabled.getSettings().getWheelFormatNextSeparator());

    int prevIndex = (currentIndex - 1 + size) % size;
    int nextIndex = (currentIndex + 1) % size;

    StringBuilder stringBuilder = new StringBuilder();

    // Append previous
    stringBuilder.append(unselectedSkill
        .replace("%number%", String.valueOf(prevIndex + 1))
        .replace("%skill%", skills.get(prevIndex).getData().getName()));

    // Append separator + current
    stringBuilder.append(previousSeparator)
        .append(selectedSkill
        .replace("%number%", String.valueOf(currentIndex + 1))
        .replace("%skill%", skills.get(currentIndex).getData().getName()));

    // Append separator + next
    stringBuilder.append(nextSeparator)
        .append(unselectedSkill
        .replace("%number%", String.valueOf(nextIndex + 1))
        .replace("%skill%", skills.get(nextIndex).getData().getName()));
    return stringBuilder.toString();
}


    public void setCasting(boolean casting) {
        this.casting = casting;
    }

    public void cast() {
        if (!skills.isEmpty()){
            player.cast(skills.get(index));
        }
    }

    public void nextSkill() {
        if (!skills.isEmpty()) {
            index = (index + 1) % skills.size();
        }
    }

    public void previousSkill() {
        if (!skills.isEmpty()) {
            index = (index + skills.size() - 1) % skills.size();
        }
    }

}
