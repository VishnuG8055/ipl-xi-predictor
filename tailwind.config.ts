// tailwind.config.ts — Tailwind CSS configuration with IPL team colors and custom theme
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a1a',
        'bg-secondary': '#111128',
        'bg-tertiary': '#1a1a3e',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b8',
        'text-accent': '#00f5d4',
        'border-color': '#2a2a4a',
        'csk': '#FFCB05',
        'mi': '#004BA0',
        'rcb': '#EC1C24',
        'kkr': '#3A225D',
        'dc': '#004C93',
        'pbks': '#ED1B24',
        'rr': '#EA1A85',
        'srh': '#FF822A',
        'gt-dark': '#1B2133',
        'gt-light': '#A0E3F0',
        'lsg': '#A72056',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
