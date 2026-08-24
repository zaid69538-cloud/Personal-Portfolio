/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0b10',
          secondary: '#121420',
          card: '#16192b',
        },
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          DEFAULT: '#06b6d4', // Cyan neon
        },
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        cyber: {
          dark: '#07080d',
          card: 'rgba(18, 22, 36, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(6, 182, 212, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'neon-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'neon-pink': '0 0 25px -5px rgba(236, 72, 153, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
