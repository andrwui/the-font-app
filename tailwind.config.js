/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--body)',
        monospace: 'var(--monospace)',
      },
      textColor: {
        regular: 'var(--text-regular)',
        accent: 'var(--text-accent)',
        disabled: 'var(--text-disabled)',
      },
      colors: {
        background: 'var(--layout-background)',
        accent: 'var(--layout-accent)',
        light: 'var(--layout-light)',
        dark: 'var(--layout-dark)',
        error: 'var(--semantic-error)',
        warning: 'var(--semantic-warning)',
        success: 'var(--semantic-success)',
      },
      gridTemplateColumns: {
        layout: '100px calc(100vw - 100px)',
      },
      gridTemplateRows: {
        layout: '60px calc(100vh - 50px)',
      },
    },
  },
  plugins: [],
}
