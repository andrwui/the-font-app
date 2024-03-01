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
        regular: 'rgb(var(--text-regular) / <alpha-value>)',
        accent: 'rgb(var(--text-accent) / <alpha-value>)',
        disabled: 'rgb(var(--text-disabled) / <alpha-value>)',
      },
      colors: {
        background: 'rgb(var(--layout-background) / <alpha-value>)',
        accent: 'rgb(var(--layout-accent) / <alpha-value>)',
        light: 'rgb(var(--layout-light) / <alpha-value>)',
        dark: 'rgb(var(--layout-dark) / <alpha-value>)',
        error: 'rgb(var(--semantic-error) / <alpha-value>)',
        warning: 'rgb(var(--semantic-warning) / <alpha-value>)',
        success: 'rgb(var(--semantic-success) / <alpha-value>)',
      },
      gridTemplateColumns: {
        layout: '100px calc(100vw - 100px)',
      },
      gridTemplateRows: {
        layout: '60px calc(100vh - 60px)',
      },
    },
  },
  plugins: [],
}
