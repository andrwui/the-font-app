import Tooltip from 'components/Tooltip'
import { type ReactNode, type ReactElement, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LocationLinkProps {
  children: ReactNode
  to: string
  className?: string
  style?: CSSProperties
  tooltip: string
}

const LocationLink = ({
  children,
  to,
  className,
  style,
  tooltip,
}: LocationLinkProps): ReactElement => {
  const location = useLocation().pathname

  const route = `/${to.split('/')[2]}`
  const baseRoute = `/${location.split('/')[2]}`

  const isCurrentRoute = baseRoute === route
  return (
    <Tooltip
      direction="right"
      text={tooltip}
      className="w-full"
      delay={550}
    >
      <Link
        to={to}
        className={`grid aspect-square place-items-center rounded-md *:h-3/5 *:w-3/5 transition-all duration-75
        ${isCurrentRoute ? 'text-accent' : 'text-regular'}
        ${isCurrentRoute ? 'bg-accent' : 'bg-dark'}
        ${!isCurrentRoute ? 'hover:bg-light' : ''}
        ${className ? className : ''} `}
        style={{
          ...style,
        }}
      >
        {children}
      </Link>
    </Tooltip>
  )
}
export default LocationLink
