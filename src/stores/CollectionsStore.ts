import { create } from 'zustand'
import { type Collection, type CollectionItem } from 'types/Collections'

type CollectionStore = {
  collections: Record<string, Collection>
  addCollection: (key: string) => void
  removeCollection: (key: string) => void
  addItem: (collection: string, item: CollectionItem) => void
  removeItem: (collection: string, item: CollectionItem) => void
  setCollections: (collections: Record<string, Collection>) => void
}

const useCollectionsStore = create<CollectionStore>(set => ({
  collections: {},
  addCollection: key => {
    set(state => ({
      collections: {
        ...state.collections,
        [key]: [],
      },
    }))
  },
  removeCollection: key => {
    set(state => {
      const { [key]: deletedCollection, ...rest } = state.collections
      return { collections: rest }
    })
  },
  addItem: (collection, item) => {
    set(state => ({
      collections: {
        ...state.collections,
        [collection]: [...state.collections[collection], item],
      },
    }))
  },
  removeItem: (collection, item) => {
    set(state => ({
      collections: {
        ...state.collections,
        [collection]: state.collections[collection].filter(
          i => i.fontData[0].family !== item.fontData[0].family,
        ),
      },
    }))
  },
  setCollections: (collections: Record<string, Collection>) => {
    set({ collections })
  },
}))

export default useCollectionsStore
