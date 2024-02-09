import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        c1: '#121212',
        'c1-1': '#00000094',
        c2: '#2B2828',
        c3: '#FFFFFF',
        'c3-1': '#FFFFFF18',
        'c3-2': '#FFFFFF07',
        c4: '#090909',
        c5: '#4B4B4B22',
        c6: '#232323',
        c7: '#1D1D1D',
        c8: '#1A1A1A'
      },
      backgroundImage: {
        mainBg: 'url(/backgrounds/home.svg)',
        heroBg: 'url(/backgrounds/hero.svg)'
      },
      aspectRatio: {
        '6/7': '6/7'
      }
    }
  },
  plugins: []
}
export default config
