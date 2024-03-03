import Text from 'components/Text'
import { type ReactElement } from 'react'
import Link from 'components/Link'
const NotSupported = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <Text
        className="max-sm:w-4/5 w-1/4"
        balance
        size={18}
        weight="200"
        align="center"
      >
        {`Oops... Your browser may not be compatible with the app, or you denied our request
        to access your local fonts :(`}
      </Text>
      <Text
        size={16}
        weight="500"
      >
        <Link
          to="#"
          icon
          animated
        >
          Learn more
        </Link>
      </Text>
    </div>
  )
}

export default NotSupported
