import { useState, useEffect } from 'react';
import { isBrowser } from '../utils';  // Assuming this utility function checks if the code is running in a browser

interface BatteryManager {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener(
    type: string,
    listener: EventListener | EventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListener | EventListenerObject | null,
    options?: boolean | EventListenerOptions,
  ): void;
}

interface BatteryState {
  supported: boolean;
  loading: boolean;
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}

interface NavigatorWithBattery extends Navigator {
  getBattery: () => Promise<BatteryManager>;
}

/**
 * Hook to get battery status.
 *
 * @returns Returns an object with battery status.
 */

const useBattery = (): BatteryState => {
  const [batteryState, setBatteryState] = useState<BatteryState>({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    if (!isBrowser()) {
      setBatteryState((prevState) => ({
        ...prevState,
        supported: false,
        loading: false,
      }));
      return;
    }

    const _navigator = navigator as NavigatorWithBattery;
    let battery: BatteryManager | null = null;

    const handleBatteryChange = () => {
      if (battery) {
        setBatteryState({
          supported: true,
          loading: false,
          level: battery.level,
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        });
      }
    };

    _navigator.getBattery().then((_battery) => {
      battery = _battery;
      handleBatteryChange();

      _battery.addEventListener('levelchange', handleBatteryChange);
      _battery.addEventListener('chargingchange', handleBatteryChange);
      _battery.addEventListener('chargingtimechange', handleBatteryChange);
      _battery.addEventListener('dischargingtimechange', handleBatteryChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', handleBatteryChange);
        battery.removeEventListener('chargingchange', handleBatteryChange);
        battery.removeEventListener('chargingtimechange', handleBatteryChange);
        battery.removeEventListener('dischargingtimechange', handleBatteryChange);
      }
    };
  }, []);

  return batteryState;
};

export default useBattery;