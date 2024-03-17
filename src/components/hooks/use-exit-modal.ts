import { create } from "zustand";

import type { ExitModalState } from "@/types/modal";

export const useExitModal = create<ExitModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
