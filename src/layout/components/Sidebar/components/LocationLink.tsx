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

  const route = `/${to.split('/')[1]}`
  const baseRoute = `/${location.split('/')[1]}`

  const isCurrentRoute = baseRoute === route
  return (
    <Tooltip direction="right" text={tooltip} className="w-full">
      <Link
        to={to}
        className={`grid aspect-square w-full place-items-center rounded-md *:h-2/3 *:w-2/3
        ${isCurrentRoute ? 'text-off-black' : 'text-bar-foreground'}
        ${isCurrentRoute ? 'bg-bar-foreground' : 'bg-off-black'}
        ${!isCurrentRoute ? 'hover:bg-bar-search-border' : ''}
        ${className ? className : ''} `}
        // className={`grid h-[40px] w-[40px] place-items-center rounded-md text-bar-background *:h-2/3 *:w-2/3  hover:bg-bar-search-border ${
        //   className ? className : ''
        // } `}
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
