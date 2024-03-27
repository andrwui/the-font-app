export type CollectionItem = {
  family: string
  from: 'google' | 'local'
  date: Date
}

export type Collection = CollectionItem[]
