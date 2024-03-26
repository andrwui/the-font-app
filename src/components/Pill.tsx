import { type ReactNode, type ReactElement } from 'react'

type PillProps = { children: ReactNode | string }

const Pill = ({ children }: PillProps): ReactElement => {
  return (
    <span className="text-sm h-full flex items-center justify-items-center bg-dark px-2 rounded-full border-2 border-light">
      {children}
    </span>
  )
}
export default Pill
