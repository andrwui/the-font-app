/// <reference types="vite-plugin-svgr/client" />

import { type ReactElement, type ChangeEvent } from 'react'
import {
  useItalicStore,
  useSizeStore,
  useSpacingStore,
  useTextAlignStore,
  useWeightStore,
} from 'stores/FontControlsStore'
import Slider from 'components/Slider'
import Cycler, { type CyclerOption } from 'components/Cycler'

import { RxFontItalic, RxFontRoman } from 'react-icons/rx'
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa'

import IFontSize from './icons/font_size.svg?react'
import IFontWeight from './icons/font_weight.svg?react'
import ILetterSpacing from './icons/letter_spacing.svg?react'
import SearchButton from './components/SearchButton'

const FontControls = (): ReactElement => {
  // Declare all the stores
  const { size, setSize, resetSize } = useSizeStore()
  const { weight, setWeight, resetWeight } = useWeightStore()
  const { letterSpacing, setLetterSpacing, resetLetterSpacing } = useSpacingStore()
  const { setItalic } = useItalicStore()
  const { setTextAlign } = useTextAlignStore()

  type InputChangeEvent = ChangeEvent<HTMLInputElement>

  // Function to handle the size change of the fonts
  const handleSizeChange = (e: InputChangeEvent): void => {
    const size = Number(e.target.value)
    setSize(size)
  }
  // Function to handle the weight change of the fonts
  const handleWeightChange = (e: InputChangeEvent): void => {
    const weight = Number(e.target.value)
    setWeight(weight)
  }
  // Function to handle the letter spacing change of the fonts
  const handleLetterSpacingChange = (e: InputChangeEvent): void => {
    const letterSpacing = Number(e.target.value)

    setLetterSpacing(letterSpacing)
  }

  const italicOptions: CyclerOption[] = [
    {
      icon: <RxFontRoman className="size-[30px]" />,
      text: 'Regular',
      value: '',
    },
    {
      icon: <RxFontItalic className="size-[30px]" />,
      text: 'Italic',
      value: 'italic',
    },
  ]

  const alignOptions: CyclerOption[] = [
    {
      icon: <FaAlignLeft className="size-[20px]" />,
      text: 'Left',
      value: 'left',
    },
    {
      icon: <FaAlignCenter className="size-[20px]" />,
      text: 'Center',
      value: 'center',
    },
    {
      icon: <FaAlignRight className="size-[20px]" />,
      text: 'Right',
      value: 'right',
    },
  ]

  // Returns a panel with controls for the fonts
  // Has a controls section that has all the currently available settings for viewing the fonts.
  // The numeric values are managed by the generic Sliders (See Generics > Slider to see how it works).
  // The non-numeric (Boolean) values, are managed by the generic Checkboxes (See Generics > Checkbox to see how it works).

  return (
    <div className="max-sm:hidden flex h-max w-full flex-col items-center justify-start bg-background lg:h-max lg:flex-row lg:justify-start lg:gap-10 pb-3">
      <div className="mb-4 flex gap-3 lg:mb-0">
        <SearchButton />
        <Cycler
          options={italicOptions}
          onClick={setItalic}
          tooltip="Font style"
        />
        <Cycler
          options={alignOptions}
          onClick={setTextAlign}
          tooltip="Text align"
        />
      </div>
      <Slider
        className="w-1/4"
        showValue
        label={<IFontSize className="*:fill-accent" />}
        min="20"
        step="5"
        max="200"
        reset={resetSize}
        value={String(size)}
        unit="px"
        onChange={handleSizeChange}
        tooltip="Font size"
      />
      <Slider
        className="w-1/4"
        showValue
        label={<IFontWeight className="*:fill-accent" />}
        min="100"
        max="1000"
        step="100"
        reset={resetWeight}
        value={String(weight)}
        onChange={handleWeightChange}
        tooltip="Font weight"
      />
      <Slider
        className="w-1/4"
        showValue
        label={<ILetterSpacing className="*:fill-accent" />}
        min="-5"
        max="20"
        step="1"
        reset={resetLetterSpacing}
        value={String(letterSpacing)}
        unit="px"
        onChange={handleLetterSpacingChange}
        tooltip="Letter spacing"
      />
    </div>
  )
}
export default FontControls
