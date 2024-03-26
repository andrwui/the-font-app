import { create } from 'zustand'
import { type Collection, type CollectionItem } from 'types/CollectionTypes'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'
import { isLocalFont } from 'helpers/FontHelper'

type CollectionStore = {
  collections: Record<string, Collection>
  addCollection: (key: string) => void
  removeCollection: (key: string) => void
  addItem: <T extends GoogleFont | LocalFont>(
    collection: string,
    item: CollectionItem<T>,
  ) => void
  removeItem: <T extends GoogleFont | LocalFont>(
    collection: string,
    item: CollectionItem<T>,
  ) => void
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
        [collection]: state.collections[collection].filter(i => {
          if (isLocalFont(i.family) && isLocalFont(item.family)) {
            return i.family[0].family !== item.family[0].family
          } else if (!isLocalFont(i.family) && !isLocalFont(item.family)) {
            return i.family.family !== item.family.family
          }
          return null
        }),
      },
    }))
  },
  setCollections: (collections: Record<string, Collection>) => {
    set({ collections })
  },
}))

export default useCollectionsStore
