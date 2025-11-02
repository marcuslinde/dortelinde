import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'rounded-blob': '63% 37% 54% 46% / 55% 48% 52% 45%',
        'rounded-blob-2': '48% 52% 45% 55% / 63% 37% 63% 37%'
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '33%': { borderRadius: '48% 52% 45% 55% / 63% 37% 63% 37%' },
          '66%': { borderRadius: '64% 36% 55% 45% / 45% 55% 45% 55%' },
          '100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }
        },
        morphSlow: {
          '0%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '33%': { borderRadius: '48% 52% 45% 55% / 63% 37% 63% 37%' },
          '66%': { borderRadius: '64% 36% 55% 45% / 45% 55% 45% 55%' },
          '100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }
        },
        float: {
          'from': { transform: 'translateY(0px)' },
          'to': { transform: 'translateY(-8px)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -4px)' }
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        morphSlow: 'morph 20s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite alternate',
        drift: 'drift 8s ease-in-out infinite'
      },
      // ... (rest of your config is the same)
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },
        hero: {
          DEFAULT: "var(--hero-bg)",
          text: "var(--hero-text)",
          blob: "var(--hero-blob-bg)",
          trustMobile: "var(--hero-trust-bg-mobile)",
          trustDesktop: "var(--hero-trust-bg-desktop)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Rubik", "sans-serif"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

export default config