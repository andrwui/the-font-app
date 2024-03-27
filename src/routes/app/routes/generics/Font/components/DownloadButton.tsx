import Tooltip from 'components/Tooltip'
import { type ReactElement } from 'react'
import { LuDownload } from 'react-icons/lu'
import { type GoogleFont } from 'types/FontTypes'

const DownloadButton = ({ font }: { font: GoogleFont }): ReactElement => {
  return (
    <Tooltip text="Download font">
      <a
        download="Hiii.ttf"
        target="_self"
        href={Object.values(font.files)[0].replace('.woff2', '.ttf')}
        style={{
          pointerEvents: 'all',
        }}
        rel="noreferrer"
      >
        <LuDownload />
      </a>
    </Tooltip>
  )
}
export default DownloadButton
