import { create } from 'zustand'

interface PolicyStore {
  hasAccepted: boolean
  setHasAccepted: (hasAccepted: boolean) => void
}

export const usePolicyStore = create<PolicyStore>(set => ({
  hasAccepted: false,
  setHasAccepted: (hasAccepted: boolean) => {
    set({ hasAccepted })
  },
}))
