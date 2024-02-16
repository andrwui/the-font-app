import { type ReactNode, type ReactElement } from 'react'
import Text from './Text'

const Modal = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="center-absolute absolute z-40 h-screen w-screen bg-secondary-mid backdrop-blur-sm transition-all duration-150">
      <div className="center-absolute border-ly-sec absolute z-50 h-2/3 w-2/3 rounded-lg border-2 bg-secondary-mid p-3">
        {children}
      </div>
    </div>
  )
}

interface ModalTitleProps {
  children: ReactNode
}

Modal.Title = ({ children }: ModalTitleProps): ReactElement => {
  return (
    <div className="border-ly-sec border-b-2 text-foreground">
      <Text size={32}>{children}</Text>
    </div>
  )
}

export default Modal
