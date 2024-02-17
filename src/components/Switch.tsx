import { useState, type ReactElement, type ChangeEvent } from 'react'
import Text from './Text'

const Switch = ({
  onChange,
  value,
  label,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: boolean
  label?: string
}): ReactElement => {
  const [isChecked, setIsChecked] = useState(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked)
    onChange(e)
  }

  return (
    <label className="flex w-max items-center gap-4">
      <label
        className="relative block h-5 w-10 cursor-pointer rounded-full bg-bar-background transition-all duration-150"
        style={{
          background: isChecked ? 'var(--foreground)' : 'var(--secondary-mid)',
        }}
      >
        <input
          className="appearance-none"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span
          className="absolute top-[50%] aspect-square h-5/6 translate-y-[-50%] rounded-full bg-foreground transition-all duration-150"
          style={{
            background: isChecked ? 'var(--background)' : 'var(--background)',
            left: isChecked ? '53%' : '5%',
          }}
        ></span>
      </label>
      {label && typeof label === 'string' ? <Text size={18}>{label}</Text> : label}
    </label>
  )
}
export default Switch
