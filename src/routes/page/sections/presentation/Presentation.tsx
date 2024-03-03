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
    <main className="h-screen flex flex-col max-sm:my">
      <div className="mx-auto mt-[60px]">
        <AppIcon
          className="h-min
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
        2xl:w-[35dvw]
      "
      >
        <SplitText
          from="down"
          delay={3}
          split="words"
          childrenClassName="max-sm:pr-[2dvw] sm:pr-[2dvw] lg:pr-[2dvw] xl:pr-[.9dvw]"
          className="relative
          text-[5dvw]
          max-sm:text-[10dvw] max-sm:leading-[10dvw]
          sm:text-[10dvw] sm:leading-[7dvw]
          lg:text-[8dvw] lg:leading-[6dvw]
          xl:text-[6.5dvw] xl:leading-[4.3dvw]
          2xl:text-[4dvw] 2xl:leading-[2.2dvw]
          "
          style={{ fontFamily: 'Coolvetica Rg' }}
        >
          The application for all your
        </SplitText>
        <SplitText
          delay={3}
          from="down"
          split="letters"
          className="absolute w-max text-center
              text-[11dvw] -bottom-[2dvw] right-[5dvw]
              max-sm:text-[23dvw] max-sm:-bottom-[10dvw] max-sm:-right-[2dvw]
              sm:text-[20dvw] sm:-bottom-[14dvw] sm:right-[3dvw]
              lg:text-[17dvw] lg:-bottom-[9dvw] lg:right-[7dvw]
              xl:text-[16dvw] xl:-bottom-[12dvw] xl:right-[1dvw]
              2xl:text-[10dvw] 2xl:-bottom-[8dvw] 2xl:-right-[0]
              "
          style={{
            fontFamily: 'Courgette',
          }}
        >
          fonts
        </SplitText>
      </section>
      <section className="mx-auto my-auto flex flex-col gap-10">
        <Button
          className={
            'rounded-md bg-accent py-3 px-6 text-background hover:shadow-[0_0_60px_-15px_#fff] transition-all duration-75'
          }
          onClick={() => navigate(`/app/font-viewer/local`, { replace: true })}
        >
          Get started
        </Button>
        {/* <Text
          style={{
            fontFamily: 'Courgette',
          }}
          align="center"
        >
          or
        </Text>
        <div className="flex items-center justify-center gap-5">
          <FaAngleDown />
          <Text>Scroll down</Text>
          <FaAngleDown />
        </div> */}
      </section>
    </main>
  )
}
export default Presentation
