import {create} from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
    email: string
    setEmail: (_email: string) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, _) => ({
      email: "",
      setEmail: (_email) =>
        set((_) => ({
          email: _email,
        })),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);