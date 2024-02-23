import { useState, type ReactElement } from 'react'
import Tooltip from './Tooltip'
import Text from './Text'

export interface CyclerOption {
  icon: ReactElement
  text?: string
  value: string | number
}

interface CyclerProps {
  options: CyclerOption[]
  onClick: (_: any) => void
  tooltip?: string
}

const Cycler = ({ options, onClick, tooltip }: CyclerProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (): void => {
    const nextIndex = (currentIndex + 1) % options.length
    setCurrentIndex(nextIndex)

    onClick(options[nextIndex].value)
  }

  const classNames =
    'flex h-[40px] w-[130px] cursor-pointer items-center justify-center gap-1 rounded-md bg-dark text-regular transition-all duration-[25] active:scale-[.9]'

  return tooltip ? (
    <Tooltip text={tooltip}>
      <div
        className={classNames}
        onClick={handleClick}
      >
        {options[currentIndex].icon}
        {options[currentIndex].text && <Text>{options[currentIndex].text}</Text>}
      </div>
    </Tooltip>
  ) : (
    <div
      className={classNames}
      onClick={handleClick}
    >
      {options[currentIndex].icon}
      {options[currentIndex].text && <Text>{options[currentIndex].text}</Text>}
    </div>
  )
}
export default Cycler
