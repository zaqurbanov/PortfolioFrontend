import { locations } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

interface LocationStore {
    activeLocation: any;
    setActiveLocation: (location: any) => void;
    resetActiveLocation: () => void;
}

type Store = LocationStore
const useLocationStore = create<Store>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,
        setActiveLocation: (location = null) => set((state: any) => { state.activeLocation = location }),

        resetActiveLocation: () => set((state: any) => { state.activeLocation = DEFAULT_LOCATION })
    }))
)


export default useLocationStore