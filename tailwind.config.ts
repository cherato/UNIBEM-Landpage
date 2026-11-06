import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // The UNIBEM four-color identity, pulled from the new logo
        // (public/logo.png, public/reference_colors.png).
        uni: {
          yellow: '#FFCF00',
          'yellow-deep': '#F0B800',
          // Dark amber for yellow-* as text/icon on light grounds (AA-safe);
          // pure yellow stays a fill color.
          'yellow-ink': '#8A6A00',
          blue: '#186CC0',
          'blue-dark': '#0E4A85',
          red: '#E41818',
          'red-deep': '#B30E0E',
          green: '#30B46C',
          'green-dark': '#1A7A48',
        },
        // Neutrals — modern ink + bone ground.
        ink: {
          DEFAULT: '#101014',
          soft: '#38383F',
          muted: '#5C5C66',
          faint: '#8A8A94',
          line: '#E6E6EC',
          softest: '#F4F4F7',
        },
        bone: '#FAFAF6',
      },
      fontFamily: {
        heading: ['"Fredoka"', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      borderRadius: {
        brick: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,16,20,0.04), 0 8px 24px rgba(16,16,20,0.06)',
        lift: '0 2px 4px rgba(16,16,20,0.05), 0 16px 40px rgba(16,16,20,0.12)',
        brick:
          '0 1px 2px rgba(16,16,20,0.06), 0 12px 28px -12px rgba(16,16,20,0.28)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
