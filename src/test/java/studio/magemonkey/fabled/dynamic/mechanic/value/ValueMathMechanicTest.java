package studio.magemonkey.fabled.dynamic.mechanic.value;

import org.bukkit.entity.Player;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.dynamic.DynamicSkill;
import studio.magemonkey.fabled.dynamic.EffectComponent;
import studio.magemonkey.fabled.manager.IAttributeManager;

import java.lang.reflect.Field;
import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ValueMathMechanicTest {
    private MockedStatic<Fabled> fabled;
    private Fabled               fabledMock;
    private Settings             settings;
    private CastData             data;
    private Player               player;

    private ValueMathMechanic mechanic;

    @BeforeEach
    void setUp() throws NoSuchFieldException, IllegalAccessException {
        fabled = mockStatic(Fabled.class);
        fabledMock = mock(Fabled.class);
        Logger logger = Logger.getLogger("Fabled");
        when(fabledMock.getLogger()).thenReturn(logger);
        fabled.when(Fabled::inst).thenReturn(fabledMock);
        fabled.when(Fabled::getAttributesManager).thenReturn(mock(IAttributeManager.class));
        UUID uuid = UUID.randomUUID();
        player = mock(Player.class);
        when(player.getUniqueId()).thenReturn(uuid);
        data = DynamicSkill.getCastData(player);

        settings = mock(Settings.class);
        when(settings.has("key")).thenReturn(true);
        when(settings.getString("key")).thenReturn("key");
        when(settings.getBool("save", false)).thenReturn(false);

        mechanic = spy(new ValueMathMechanic());
        Field settingsField = EffectComponent.class.getDeclaredField("settings");
        settingsField.setAccessible(true);
        settingsField.set(mechanic, settings);
    }

    @AfterEach
    void tearDown() {
        fabled.close();
    }

    @Test
    void execute_dividesLargeNumberCleanly() {
        when(settings.getString("function")).thenReturn("100/10");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(10, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_dividesSmallNumberCleanly() {
        when(settings.getString("function")).thenReturn("1/10");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(0.1d, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_dividesZero() {
        when(settings.getString("function")).thenReturn("0/10");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(0, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_dividesNegativeNumber() {
        when(settings.getString("function")).thenReturn("-100/10");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(-10, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_dividesNegativeNumberWithNegativeDivisor() {
        when(settings.getString("function")).thenReturn("-100/-10");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(10, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_divideByZero() {
        when(settings.getString("function")).thenReturn("100/0");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertFalse(result);
    }

    @Test
    void execute_replacesKeysInFunction() {
        data.put("key", 100d);
        data.put("key2", 10d);
        when(settings.getString("function")).thenReturn("{key}/{key2}");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(10, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_replacesNestedKeysInFunction() {
        data.put("key", 100d);
        data.put("key2", "one");
        data.put("key3", "two");
        data.put("one-two", 5d);
        when(settings.getString("function")).thenReturn("{key}/{{key2}-{key3}}");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(20, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_evaluatesComplexFunction() {
        data.put("key", 100d);
        when(settings.getString("function")).thenReturn("cos(({key}+10)*2)/pi");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(0.3170637573695394, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_evaluatesLog() {
        data.put("key", 100d);
        when(settings.getString("function")).thenReturn("log({key}+10)");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(2.041392685158225, DynamicSkill.getCastData(player).getDouble("key"));
    }

    @Test
    void execute_evaluatesComplexLog() {
        data.put("key", 100d);
        when(settings.getString("function")).thenReturn("sqrt((log({key}+10)/log(5))+e)");
        boolean result = mechanic.execute(player, 1, List.of(player), false);
        assertTrue(result);
        assertEquals(2.374627231574972, DynamicSkill.getCastData(player).getDouble("key"));
    }
}
