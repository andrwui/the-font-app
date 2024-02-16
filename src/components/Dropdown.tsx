import { useState, type ReactElement, useRef, useEffect, type ReactNode } from 'react'
import Text from './Text'

interface DropdownProps {
  children: string
  className?: string
  options: DropdownItem[]
}

interface DropdownItem {
  name: ReactNode
  action: () => void
}

const Dropdown = ({ children, options, className }: DropdownProps): ReactElement => {
  const [isShown, setIsShown] = useState(false)

  const showDropdown = (): void => {
    isShown ? setIsShown(false) : setIsShown(true)
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const hideDropdown = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsShown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', hideDropdown)
    return () => {
      document.removeEventListener('mousedown', hideDropdown)
    }
  }, [])

  return (
    <div
      className={`${className && className} relative w-max`}
      onClick={showDropdown}
      ref={dropdownRef}
    >
      {children}
      {isShown && (
        <ul className="absolute left-0 top-0 mt-6 flex min-w-10 list-none flex-col rounded-md bg-secondary-mid p-2">
          {options.map((option, index) => {
            return (
              <Dropdown.Item
                key={index}
                option={option}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

Dropdown.Item = ({ option }: { option: DropdownItem }) => {
  return (
    <li
      onClick={option.action}
      className="flex items-center justify-center rounded-sm p-1 hover:bg-secondary-mid"
    >
      <Text size={13}>{option.name}</Text>
    </li>
  )
}
export default Dropdown
