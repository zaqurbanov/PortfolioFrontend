import { useEffect } from "react";
import useWindowStore from "#store/useWindowStore";

const useKeyboardShortcuts = () => {
  const { closeWindow } = useWindowStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isClose = e.key === "Escape" || (e.metaKey && e.key === "w");
      if (!isClose) return;

      const { windows } = useWindowStore.getState();
      let topKey: string | null = null;
      let topZ = -1;

      Object.entries(windows).forEach(([key, win]: [string, any]) => {
        if (win.isOpen && win.zIndex > topZ) {
          topZ = win.zIndex;
          topKey = key;
        }
      });

      if (topKey) {
        e.preventDefault();
        closeWindow(topKey);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeWindow]);
};

export default useKeyboardShortcuts;
