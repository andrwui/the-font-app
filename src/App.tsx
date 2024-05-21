import { useLoadFonts } from './hooks/useLoadFonts'
import { Virtuoso } from 'react-virtuoso'

function App() {
  const { isLoading, fonts } = useLoadFonts()

  return (
    <>
      {isLoading ? <p>Loading...</p> : <p>items loaded: {fonts.length}</p>}
      <Virtuoso
        className="h-full"
        totalCount={fonts.length}
        itemContent={i => {
          const { names } = fonts[i]
          return (
            <p
              style={{
                fontFamily: names.fontFamily['en'],
                fontStyle: names.fontSubfamily['en'],
              }}
            >
              {`${names.fullName['en']} ${names.fontSubfamily['en']} `}
            </p>
          )
        }}
      />
    </>
  )
}

export default App
