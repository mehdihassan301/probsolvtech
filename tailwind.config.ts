import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#7B3EF0',
        accent: '#6AEBFF',
        bg_dark: '#0D0C12',
        bg_light: '#F7F7F8',
        surface_dark: '#131219',
        surface_light: '#FFFFFF',
        border_dark: '#24232B',
        border_light: '#EAEAEB',
        text_dark: '#F0F0F1',
        text_light: '#0D0C12',
        subtext_dark: '#A09FA6',
        subtext_light: '#5A5963',
      },
      backgroundImage: {
        'gradient-animated-light': 'linear-gradient(-45deg, #f3e5f5, #e1f5fe, #e8eaf6, #e0f2f1)',
        'gradient-animated-dark': 'linear-gradient(-45deg, #0D0C12, #161221, #0D0C12, #111e21)',
        'gradient-footer-light': 'linear-gradient(-45deg, #FFFFFF, #F5F0FF, #FFFFFF, #F0FBFC)',
        'gradient-footer-dark': 'linear-gradient(-45deg, #131219, #1A1626, #131219, #162426)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      animation: {
        'float-1': 'float 12s ease-in-out infinite',
        'float-2': 'float 15s ease-in-out infinite reverse',
        'float-3': 'float 18s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-out': 'fadeOut 0.25s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-out-down': 'fadeOutDown 0.4s ease-in forwards',
        'pop-in': 'popIn 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'move-blob': 'moveBlob 20s ease-in-out infinite',
        'gradient-bg': 'animated-gradient 15s ease infinite',
        'footer-gradient-bg': 'animated-gradient 25s ease infinite',
        'text-alive': 'textAlive 8s ease-in-out infinite alternate',
        'logo-dot-glow': 'logo-dot-glow 3s ease-in-out infinite',
        'logo-text-glow': 'logo-text-glow 2.5s ease-in-out infinite alternate',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(10deg)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(20px)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        moveBlob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 40px) scale(1.2)' },
        },
        'animated-gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        textAlive: {
          '0%, 100%': { transform: 'scale(1)', letterSpacing: '-0.5px' },
          '50%': { transform: 'scale(1.02)', letterSpacing: '0.5px' },
        },
        'logo-dot-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 3px var(--color-primary))' },
          '50%': { filter: 'drop-shadow(0 0 8px var(--color-primary))' },
        },
        'logo-text-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 1px var(--color-primary))' },
          '50%': { filter: 'drop-shadow(0 0 4px var(--color-primary))' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
