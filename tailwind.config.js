/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', '"IBM Plex Mono"', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        // Black base + terminal accents.
        // Names kept so existing `bg-brutalist-*` classes shift automatically.
        brutalist: {
          black: '#000000',
          darkgray: '#0a0a0a',
          gray: '#141414',
          lightgray: '#262626',
          white: '#e8e8ee',
          offwhite: '#f5f5f7',
          border: '#262626',
        },
        // Surface / terminal accent tokens.
        space: {
          deep: '#000000',
          night: '#0a0a0a',
          slate: '#141414',
          line: '#262626',
        },
        neon: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          green: '#22c55e',
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) forwards',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
