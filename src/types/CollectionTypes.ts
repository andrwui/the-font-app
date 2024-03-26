import { type GoogleFont, type LocalFont } from './FontTypes'

export type CollectionItem<T extends GoogleFont | LocalFont> = {
  family: T
  from: 'google' | 'local'
  date: Date
}

export type Collection = Array<CollectionItem<GoogleFont | LocalFont>>
