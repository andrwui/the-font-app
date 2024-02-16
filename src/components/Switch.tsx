import { useState, type ReactElement, type ChangeEvent } from 'react'

const Switch = (): ReactElement => {
  const [isChecked, setIsChecked] = useState(true)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span></span>
    </div>
  )
}
export default Switch
