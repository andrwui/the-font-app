import Text from 'components/Text'
import { type ReactElement } from 'react'

const Presentation = (): ReactElement => {
  return (
    <main className="h-screen flex">
      <section className="w-3/6 h-3/4 bg-accent bg-opacity-25 mx-auto mt-16">
        <Text
          spacing={-5}
          className="text-[128px] relative"
          lineHeight={150}
          style={{ fontFamily: 'Coolvetica' }}
        >
          The application for all your
          <div className="absolute text-[228px] -bottom-10 right-[5%]">fonts</div>
        </Text>
      </section>
    </main>
  )
}
export default Presentation
