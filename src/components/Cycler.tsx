import { useState, type ReactElement } from 'react'
import Tooltip from './Tooltip'

export interface CyclerOption {
  icon: ReactElement
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

  return tooltip ? (
    <Tooltip text={tooltip}>
      <div
        className="grid h-[30px] w-[30px] cursor-pointer place-items-center rounded-md bg-secondary-mid text-foreground transition-all duration-[25] active:scale-[.9]"
        onClick={handleClick}
      >
        {options[currentIndex].icon}
      </div>
    </Tooltip>
  ) : (
    <div
      className="grid h-[30px] w-[30px] cursor-pointer place-items-center rounded-md bg-secondary-mid text-foreground transition-all duration-[25] active:scale-[.9]"
      onClick={handleClick}
    >
      {options[currentIndex].icon}
    </div>
  )
}
export default Cycler
