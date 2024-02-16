import type { ChangeEvent, ReactElement } from 'react'
import { useTextReplacerStore } from 'stores/FontControlsStore'
import BigInput from 'components/BigInput'

// Bar used to replace the text in the font viewer
const ReplaceBar = (): ReactElement => {
  const { setText } = useTextReplacerStore()

  // Changing the viewer text when the input changes
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    setText(text)
  }
  return (
    // Returns a reusable Bar component
    <BigInput
      id="ReplaceBar"
      className="col-span-1 row-span-1 border-t-[1px] border-t-secondary-mid text-foreground placeholder-secondary-light"
      onChange={handleTextChange}
      name="Replace Bar"
      placeholder="Replace Text"
    />
  )
}
export default ReplaceBar
