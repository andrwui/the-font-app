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
      className="w-full p-1 hover:bg-light rounded-md"
      key={key}
    >
      {children}
    </li>
  )
}

export default CollectionDropdownItem
