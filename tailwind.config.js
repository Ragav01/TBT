/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary:{
          600: 'var(--color-primary-600)',
          500: 'var(--color-primary-500)',
          400: 'var(--color-primary-400)',
          100: 'var(--color-primary-100)'
        },
        secondary:{
          600: 'var(--color-secondary-600)',
          500: 'var(--color-secondary-500)',
          400: 'var(--color-secondary-400)',
          100: 'var(--color-secondary-100)',
        },
        success:{
          600: 'var(--color-success-600)',
          500: 'var(--color-success-500)',
          400: 'var(--color-success-400)',
          100: 'var(--color-success-100)'
        },
        warning:{
          600: 'var(--color-warning-600)',
          500: 'var(--color-warning-500)',
          400: 'var(--color-warning-400)',
          100: 'var(--color-warning-100)'
        },
        danger:{
          600: 'var(--color-danger-600)',
          500: 'var(--color-danger-500)',
          400: 'var(--color-danger-400)',
          100: 'var(--color-danger-100)'
        },
        info:{
          600: 'var(--color-danger-600)',
          600: 'var(--color-danger-500)',
          600: 'var(--color-danger-400)',
          600: 'var(--color-danger-100)',
        },
        surface:{
          light:{
            primary: 'var(--color-surface-light-primary)',
            secondary: 'var(--color-surface-light-secondary)',
            tertiary: 'var(--color-surface-light-tertiary)',
            quaternary: 'var(--color-surface-light-quaternary)'
          },
          dark:{
            primary: 'var(--color-surface-dark-primary)',
            secondary: 'var(--color-surface-dark-secondary)',
            tertiary: 'var(--color-surface-dark-tertiary)',
            quaternary: 'var(--color-surface-dark-quaternary)'
          },
        },
        textColor: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)'
        },
        borderColor:{
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)'
        },
        base:{
          black: 'var(--color-black)',
          white: 'var(--color-white)',
        }
      }
    },
  },
  plugins: [],
}

