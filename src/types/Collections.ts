import { type LocalFont } from './FontTypes'

export type CollectionItem = {
  fontData: LocalFont
  from: 'google' | 'local'
  date: Date
}

export type Collection = CollectionItem[]
