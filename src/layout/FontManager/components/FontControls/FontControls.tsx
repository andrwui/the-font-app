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
      icon: <RxFontRoman className="size-full" />,
      value: '',
    },
    {
      icon: <RxFontItalic className="size-full" />,
      value: 'italic',
    },
  ]

  const alignOptions: CyclerOption[] = [
    {
      icon: <FaAlignLeft className="size-2/3" />,
      value: 'left',
    },
    {
      icon: <FaAlignCenter className="size-2/3" />,
      value: 'center',
    },
    {
      icon: <FaAlignRight className="size-2/3" />,
      value: 'right',
    },
  ]

  // Returns a panel with controls for the fonts
  // Has a controls section that has all the currently available settings for viewing the fonts.
  // The numeric values are managed by the generic Sliders (See Generics > Slider to see how it works).
  // The non-numeric (Boolean) values, are managed by the generic Checkboxes (See Generics > Checkbox to see how it works).

  return (
    <div className=" flex h-max w-full flex-col items-center justify-start gap-0 bg-background px-8 md:h-[60px] md:flex-row md:justify-start md:gap-10">
      <div className="flex gap-10">
        <Cycler
          options={italicOptions}
          onClick={setItalic}
          tooltip="Italic font"
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
        label={<IFontSize className="*:fill-foreground" />}
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
        label={<IFontWeight className="*:fill-foreground" />}
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
        label={<ILetterSpacing className="*:fill-foreground" />}
        min="-5"
        max="20"
        step="1"
        reset={resetLetterSpacing}
        value={String(letterSpacing)}
        unit="pt"
        onChange={handleLetterSpacingChange}
        tooltip="Letter spacing"
      />
    </div>
  )
}
export default FontControls
