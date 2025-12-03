import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowState {
    windows:any,
    nextZIndex:number,
}

interface WindowActions {
    openWindow: (windowKey: string, data?: any) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
}

type Store = WindowState & WindowActions


const useWindowStore = create<Store> ()  (immer((set)=>({
    windows:WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX+1,
    openWindow:(windowKey:any,data =null)=>set((state:any)=>{
        const win = state.windows[windowKey]
        win.isOpen = true
        win.zIndex = state.nextZIndex
        win.data = data ?? win.data
        state.nextZIndex++ 

    }),
    closeWindow:(windowKey:any)=>set((state:any)=>{
          const win = state.windows[windowKey]
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null

    }),
    focusWindow:(windowKey:any)=>set((state:any)=>{
             const win = state.windows[windowKey]
        win.zIndex = state.nextZIndex++
    }),

     

})))

export default useWindowStore