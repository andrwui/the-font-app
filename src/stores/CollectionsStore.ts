import { create } from 'zustand'
import { type Collection } from 'types/CollectionTypes'

type CollectionStore = {
  collections: Record<string, Collection>
  setCollections: (collections: Record<string, Collection>) => void
}

const useCollectionsStore = create<CollectionStore>(set => ({
  collections: {},
  setCollections: (collections: Record<string, Collection>) => {
    set({ collections })
  },
}))

export default useCollectionsStore
