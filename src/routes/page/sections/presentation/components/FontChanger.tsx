import { type ReactElement, useRef } from 'react'

const FontChanger = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <p
      ref={ref}
      className="absolute text-[12dvw] -bottom-[2dvw] right-[2dvw]"
      style={{
        fontFamily: 'Courgette',
      }}
    >
      fonts
    </p>
  )
}

export default FontChanger
