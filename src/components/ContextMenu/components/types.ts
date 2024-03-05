import { type ReactElement } from 'react'

export interface ContextMenuOption {
  feedback?: 'danger' | 'accent' | 'success'
  text: string | ReactElement
  icon?: ReactElement
  action: () => void
}
