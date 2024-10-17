import { create } from "zustand";

interface MainState {
  isSheetOpen: boolean | undefined;
  setIsSheetOpen: (isSheetOpen: boolean) => void;
}

export const useMainStore = create<MainState>()((set) => ({
  isSheetOpen: false,
  setIsSheetOpen: (isSheetOpen: boolean) => set({ isSheetOpen }),
}));
