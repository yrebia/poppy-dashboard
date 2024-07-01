import { fontFamily } from 'tailwindcss/defaultTheme'
import { sky } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans],
        mono: ['DM Mono', ...fontFamily.mono]
      },
      colors: {
        primary: sky
      }
    }
  }
}
