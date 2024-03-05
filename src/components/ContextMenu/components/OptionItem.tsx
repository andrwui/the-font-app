import { motion } from 'framer-motion'
import { Fragment, type ReactElement } from 'react'
import Text from 'components/Text'
import { type ContextMenuOption } from './types'

interface OptionItemProps {
  option: ContextMenuOption
  index: number
  handleClick: (option: ContextMenuOption) => void
}

const optionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const OptionItem = ({ option, index, handleClick }: OptionItemProps): ReactElement => (
  <Fragment key={index}>
    <motion.li
      key={index}
      variants={optionVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.05 }}
      onClick={() => handleClick(option)}
      className="flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-light"
    >
      <div className="flex w-5 items-center justify-center">{option.icon}</div>
      {typeof option.text === 'string' ? (
        <Text
          size={13}
          weight="500"
        >
          {option.text}
        </Text>
      ) : (
        option.text
      )}
    </motion.li>
  </Fragment>
)

export default OptionItem
