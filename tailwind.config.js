/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        off: {
          white: 'var(--off-white)',
          black: 'var(--off-black)',
        },
        bar: {
          search: {
            border: 'var(--bar-search-border)',
            input: 'var(--bar-search-input)',
          },
          background: 'var(--bar-background)',
          foreground: 'var(--bar-foreground)',
        },

        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          light: 'var(--secondary-light)',
          mid: 'var(--secondary-mid)',
          dark: 'var(--secondary-dark)',
        },
        disabled: 'var(--disabled)',
      },

      fontFamily: {
        geist: 'var(--geist)',
        mono: 'var(--geist-mono)',
      },
      gridTemplateColumns: {
        layout: '70px calc(100vw - 70px)',
      },
      gridTemplateRows: {
        layout: '44px calc(100vh - 44px)',
      },
    },
  },
  plugins: [],
}
