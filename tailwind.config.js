/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.800'),
              borderColor: theme('colors.gray.200'),
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.800'),
              fontWeight: '400',
              borderColor: theme('colors.gray.200'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              borderColor: theme('colors.gray.700'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              borderColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

