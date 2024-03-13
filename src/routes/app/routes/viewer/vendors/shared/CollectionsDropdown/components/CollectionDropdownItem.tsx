import { type ReactElement, type ReactNode } from 'react'

type CollectionDropdownItemProps = {
  children: ReactNode
  key: number
  onClick: () => void
}

const CollectionDropdownItem = ({
  children,
  key,
  onClick,
}: CollectionDropdownItemProps): ReactElement => {
  return (
    <li
      onClick={onClick}
      className="w-full p-2 hover:bg-light rounded-md transition-all duration-75"
      key={key}
    >
      {children}
    </li>
  )
}

export default CollectionDropdownItem
