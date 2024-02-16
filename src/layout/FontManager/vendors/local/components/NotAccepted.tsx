import Button from 'components/Button'
import { requestLocalFontsPermission } from 'helpers/LocalFontPermissions'
import Text from 'components/Text'
import { type ReactElement } from 'react'
import { usePolicyStore } from 'stores/PolicyStore'
import Link from 'components/Link'
import { LuArrowUpRight } from 'react-icons/lu'

const NotAccepted = (): ReactElement => {
  const { setHasAccepted } = usePolicyStore()

  const handleClick = async (): Promise<void> => {
    requestLocalFontsPermission(true).then(accepted => {
      setHasAccepted(accepted)
    })
  }

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-2">
      <Text
        style={{
          width: '50%',
        }}
        size={18}
        weight="200"
        align="center"
        balance
      >
        {'We need to request acces to read your local fonts :)'}
      </Text>
      <Text size={16} weight="500">
        <Link to="#">
          Learn more
          <LuArrowUpRight size={16} />
        </Link>
      </Text>
      <Button onClick={handleClick} animated className="mt-10">
        <Text weight="500" className="text-background">
          Request Access
        </Text>
      </Button>
    </div>
  )
}

export default NotAccepted
