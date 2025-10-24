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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        wobble: {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '33%': { transform: 'translateX(-10px) rotate(-2deg)' },
          '66%': { transform: 'translateX(10px) rotate(2deg)' }
        }
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        wobble: 'wobble 6s ease-in-out infinite'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
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
