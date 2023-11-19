import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "first-color": "var(--first-color)",
        "second-color": "var(--second-color)",
        "third-color": "var(--third-color)",
        "deep-blue": "var(--deep-blue)",
        "white": "var(--white)",
      },
    },
  },
  plugins: [],
}
export default config;
