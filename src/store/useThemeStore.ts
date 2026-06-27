import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ThemeStore {
  isDark: boolean;
  toggleDark: () => void;
}

const useThemeStore = create<ThemeStore>()(
  immer((set) => ({
    isDark: false,
    toggleDark: () =>
      set((state) => {
        state.isDark = !state.isDark;
      }),
  }))
);

export default useThemeStore;
