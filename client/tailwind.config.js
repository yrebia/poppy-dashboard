import { fontFamily } from 'tailwindcss/defaultTheme'
import { sky } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans],
      },
      colors: {
        primary: sky
      }
    }
  }
}
