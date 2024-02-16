import { useState, type ReactElement, useEffect, useRef } from 'react'
import React from 'react'
import Label from './Label'
import Text from './Text'
export interface MultiSwitchOption {
  id: string
  value: string | number
  action?: (_: any) => void
}

interface MultiSwitchProps {
  options: MultiSwitchOption[]

  label?: string
  tooltip?: string

  value: string | number
  action: (_: any) => void
}

export const MultiSwitch = ({
  label,
  options,
  action,
  value,
  tooltip,
}: MultiSwitchProps): ReactElement => {
  const [width, setWidth] = useState<number>(0)
  const [currentOption, setCurrentOption] = useState<number>(0)
  const ref = useRef<HTMLLabelElement>(null)

  const handleResize = (): void => {
    setWidth(ref.current!.offsetWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <div className="flex flex-col gap-1">
      {label && <Label tooltip={tooltip}>{label}</Label>}
      <div
        className="relative grid h-8 w-full gap-1 overflow-hidden rounded-md"
        style={{
          gridTemplateColumns: `repeat(${options.length}, 1fr`,
          gridAutoFlow: 'column',
        }}
      >
        <div
          className="absolute bg-foreground transition-all duration-150"
          style={{
            top: 0,
            left: width * currentOption + 4 * currentOption,
            width,
            height: '100%',
          }}
        />
        {options.map((option, key) => {
          return (
            <React.Fragment key={key}>
              <input
                style={{
                  gridColumn: key,
                }}
                className="hidden"
                key={key}
                type="radio"
                id={option.id}
                value={option.value}
                checked={option.value === value}
                onChange={
                  option.action
                    ? () => option.action!(option.value)
                    : () => action(option.value)
                }
                onClick={() => setCurrentOption(key)}
              />
              <label
                ref={ref}
                style={{
                  color:
                    option.value === value ? 'var(--background)' : 'var(--foreground)',
                  fontWeight: option.value === value ? '700' : '400',
                }}
                className="grid h-full w-full items-center bg-secondary-mid text-center transition-all duration-150"
                htmlFor={option.id}
              >
                <Text
                  align="center"
                  className="z-30"
                >
                  {option.id}
                </Text>
              </label>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
