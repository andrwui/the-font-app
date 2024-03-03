import { motion } from 'framer-motion'
import Button from 'components/Button'
import SplitText from 'components/SplitText'
import Text from 'components/Text'
import { type ReactElement } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AppIcon from 'routes/header/appicon/AppIcon'

/**
        // max-sm:bg-white/50
        // sm:bg-red-500 
        // lg:bg-blue-500
        // xl:bg-yellow-500
        // 2xl:bg-green-500
 */

const Presentation = (): ReactElement => {
  const navigate = useNavigate()

  return (
    <main className="h-screen flex flex-col max-sm:justify-center">
      <div className="mx-auto mt-[60px]">
        <AppIcon
          className="
          h-min
        sm:*:size-[12dvw]
        lg:*:size-[7dvw]
        *:size-[10dvw]
        "
        />
      </div>
      <section
        className="

        grid place-items-center relative mx-auto
        h-max
        max-sm:w-[80dvw]
        sm:w-[80dvw]
        lg:w-[70dvw]
        xl:w-[55dvw]
        2xl:w-[55dvw]
      "
      >
        <SplitText
          from="down"
          stagger={3}
          split="words"
          className="relative
          text-[5dvw]
          max-sm:text-[10dvw] max-sm:leading-[10dvw]
          sm:text-[10dvw] sm:leading-[7dvw]
          lg:text-[8.7dvw] lg:leading-[6dvw]
          xl:text-[6.8dvw] xl:leading-[4dvw]
          2xl:text-[6.8dvw] 2xl:leading-[6dvw]
          "
          style={{ fontFamily: 'Coolvetica Rg' }}
        >
          The application for all your
        </SplitText>
        <SplitText
          stagger={3}
          from="down"
          split="letters"
          className="absolute w-max text-center
              text-[11dvw] -bottom-[2dvw] right-[5dvw]
              max-sm:text-[22dvw] max-sm:-bottom-[10dvw] max-sm:-right-[2dvw]
              sm:text-[21dvw] sm:-bottom-[12dvw] sm:-right-[0dvw]
              lg:text-[19dvw] lg:-bottom-[12dvw] lg:right-[-0dvw]
              xl:text-[15dvw] xl:-bottom-[10dvw] xl:-right-[0dvw]
              2xl:text-[14dvw] 2xl:-bottom-[8dvw] 2xl:right-[2dvw]
              "
          style={{
            fontFamily: 'Courgette',
          }}
        >
          fonts
        </SplitText>
      </section>
      <section className="flex flex-col mx-auto mt-[6dvw] h-full justify-between max-sm:h-2/4">
        <SplitText
          from="down"
          split="words"
          stagger={2}
          delay={0.3}
          className="
          text-regular/55
          max-sm:text-[3dvw] max-sm:pb-[2dvw]
          max-lg:text-[3.5dvw]
          lg:text-[2dvw]
          xl:text-[1.5dvw]
          2xl:text-[1dvw]
          "
        >
          Preview, classify and analyze your fonts
        </SplitText>
        <Button
          animated
          className=" max-md:text-[3dvw] xl:text-[1dvw]
          w-max self-center px-4 py-2 hover:shadow-[0_0_60px_-15px_#fff] transition-all duration-75"
          onClick={() => navigate(`/app/font-viewer/local`, { replace: true })}
        >
          Get started
        </Button>
        <div className="flex flex-col text-light gap-2 max-sm:h-full justify-end">
          <Text
            style={{
              fontFamily: 'Courgette',
            }}
            align="center"
          >
            or
          </Text>
          <motion.div
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            animate={{ y: [0, 10, 0] }}
            className="flex items-center justify-center gap-5 mb-5"
          >
            <FaAngleDown />
            <p>Scroll down</p>
            <FaAngleDown />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
export default Presentation
