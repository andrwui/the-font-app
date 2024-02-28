import React, {
  type ChangeEvent,
  type ReactElement,
  useState,
  useRef,
  useEffect,
  type FocusEvent,
  useMemo,
} from 'react'
import { RxReset } from 'react-icons/rx'
import Text from './Text'
import Tooltip from './Tooltip'
import useGetWindowDimensions from 'hooks/useGetWindowDimensions'

export interface SliderProps {
  className?: string
  style?: string

  label?: string | ReactElement
  tooltip?: string

  showValue?: boolean
  unit?: string

  min: string
  max: string
  step?: string

  value: string
  reset?: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({
  className,

  tooltip,
  label,

  showValue,
  unit,

  min,
  max,
  step,

  value,
  onChange,
  reset,
}: SliderProps): ReactElement => {
  return (
    <div
      className={`flex h-full w-full items-center justify-between gap-2 ${className} `}
    >
      {label &&
        (tooltip ? (
          <Tooltip
            text={tooltip}
            direction="top"
          >
            <Text className="w-min self-center *:size-6">{label}</Text>
          </Tooltip>
        ) : (
          <Text className="w-min self-center *:size-6">{label}</Text>
        ))}
      {showValue && (
        <Slider.InputValue
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          unit={unit}
        />
      )}
      <Slider.RangeInput
        max={max}
        min={min}
        value={value}
        onChange={onChange}
        step={step}
      />
      {reset && (
        <Tooltip
          text="Reset value"
          direction="top"
          className="cursor-pointer"
        >
          <RxReset
            onClick={reset}
            className="h-4 w-4"
          />
        </Tooltip>
      )}
    </div>
  )
}

export default React.memo(Slider)

interface InputValueProps {
  unit?: string
  value: string
  min: string
  max: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

Slider.InputValue = ({
  unit,
  value,
  onChange,
  min,
  max,
}: InputValueProps): ReactElement => {
  const [inputValue, setInputValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Used to hide the unit, if not hidden, the unit will interfere with the typing
  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(true)

    // Due to the changing internal value of the input, i had to delay the select
    setTimeout(() => e.target.select())
  }
  // Handling when the input loses focus to set the actual onChange value
  const handleBlur = (): void => {
    setIsFocused(false)

    // If not valid input, return to previous value
    if (!inputValue.trim()) {
      setInputValue(value)
      return
    }

    // if input is smaller than min, set to min
    if (Number(inputValue) < Number(min)) {
      onChange({
        target: {
          value: min,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(min)
      return
    }

    // if input is bigger than max, set to max
    if (Number(inputValue) > Number(max)) {
      onChange({
        target: {
          value: max,
        },
      } as ChangeEvent<HTMLInputElement>)
      setInputValue(max)
      return
    }

    // Happy path
    setInputValue(value)
    onChange({
      target: {
        value: inputValue,
      },
    } as ChangeEvent<HTMLInputElement>)
  }

  // Sets the internal value while typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value
    setInputValue(val)
  }

  // Checks if it is currently focused or not, if not, then show the units
  const valueWithUnit = unit
    ? isFocused
      ? inputValue
      : `${inputValue + unit}`
    : inputValue

  return (
    <input
      ref={inputRef}
      type="text"
      value={valueWithUnit}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className=" w-[50px] bg-transparent text-center text-sm text-regular"
    />
  )
}

interface RangeInputProps {
  min: string
  max: string
  step?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
Slider.RangeInput = ({
  min,
  max,
  step,
  value,
  onChange,
}: RangeInputProps): ReactElement => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(calculateProgress)
  }, [value])

  const trackRef = useRef<HTMLDivElement>(null)

  // keeping track of when window changes size to
  const { wWidth } = useGetWindowDimensions()

  // calculate the progress when the value changes
  const calculateProgress = useMemo(() => {
    const numValue = Number(value)
    const numMin = Number(min)
    const numMax = Number(max)
    return ((numValue - numMin) / (numMax - numMin)) * 100
  }, [value, min, max, wWidth])

  // and another function to calculate the position of the thumb
  const calculateThumbPosition = useMemo((): number | undefined => {
    const trackWidthPx = trackRef.current?.getBoundingClientRect().width
    const thumbWidthPercent = trackWidthPx && (15 / trackWidthPx) * 100
    const leftPosition =
      thumbWidthPercent && progress - (thumbWidthPercent * progress) / 100 / 2

    return leftPosition && Math.min(Math.max(leftPosition, 0), 100 - thumbWidthPercent)
  }, [progress, trackRef, wWidth])

  return (
    <div
      className="relative h-4 w-full"
      ref={trackRef}
    >
      <input
        className="absolute left-0 top-1/2 h-1/3 translate-y-[-50%]"
        value={value}
        onChange={onChange}
        type="range"
        min={min}
        max={max}
        step={step}
      />
      <span
        className="pointer-events-none absolute left-0 top-1/2 z-10 h-1/3 translate-y-[-50%] rounded-md bg-accent transition-none duration-150 ease-linear"
        style={{
          width: `${calculateThumbPosition! + 2}%`,
        }}
      />
      <span
        className="pointer-events-none absolute top-1/2 z-20 aspect-square h-4 translate-y-[-50%] cursor-pointer appearance-none rounded-full border-2 border-solid border-accent bg-dark transition-none duration-150 ease-linear"
        style={{
          left: `${calculateThumbPosition}%`,
        }}
      />
    </div>
  )
}
