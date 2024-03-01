import { type ReactElement, useMemo, type ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  style?: React.CSSProperties

  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  size?: 10 | 13 | 16 | 18 | 24 | 32
  lineHeight?: number

  monospace?: boolean
  nowrap?: boolean
  balance?: boolean
  pretty?: boolean

  disabled?: boolean
  warn?: boolean
  danger?: boolean
  success?: boolean

  spacing?: number | string
  transform?: 'capitalize' | 'uppercase' | 'lowercase'
  align?: 'left' | 'center' | 'right'

  className?: string

  onClick?: () => void
}

const Text = ({
  children,
  className,
  style,
  onClick,
  spacing,
  transform,
  align,
  lineHeight,
  monospace,
  pretty,
  balance,
  nowrap,
  disabled,
  warn,
  danger,
  success,
  weight,
  size,
}: TextProps): ReactElement => {
  const calculateStyles = useMemo(() => {
    switch (size) {
      case 10:
        return '200'
      case 13:
        return '300'
      case 16:
        return '400'
      case 18:
        return '500'
      case 24:
        return '700'
      case 32:
        return '900'
    }
  }, [size])

  const textStyle = useMemo(() => {
    const styles: React.CSSProperties = {
      fontSize: size ? `${size}px` : undefined,
      fontWeight: weight ? weight : calculateStyles,
      lineHeight: `${lineHeight}px`,

      letterSpacing: spacing ? spacing : '0px',

      textTransform: transform,

      textAlign: align as 'left' | 'center' | 'right',
      fontFamily: monospace ? 'Geist Mono' : '',
      whiteSpace: nowrap ? 'nowrap' : 'inherit',
      textWrap: pretty ? 'pretty' : balance ? 'balance' : '',
    }

    return styles
  }, [spacing, transform, align, monospace, warn, danger, success, weight, size])

  const textColor = danger
    ? 'text-error'
    : warn
      ? 'text-warning'
      : success
        ? 'text-success'
        : disabled
          ? 'text-disabled'
          : ''

  return (
    <p
      className={`
      ${textColor}
      ${className || ''}`}
      style={{ ...textStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </p>
  )
}

export default Text
