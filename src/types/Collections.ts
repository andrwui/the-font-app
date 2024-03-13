import { type TFont } from './FontTypes'

export type CollectionItem = {
  fontData: TFont
  from: 'google' | 'local'
  date: Date
}

export type Collection = CollectionItem[]

export type Collections = Record<string, Collection>
