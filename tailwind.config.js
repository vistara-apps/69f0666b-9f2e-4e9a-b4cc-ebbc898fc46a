/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(214, 20%, 12%)',
        surface: 'hsl(214, 20%, 15%)',
        primary: 'hsl(210, 95%, 50%)',
        accent: 'hsl(140, 60%, 45%)',
        success: 'hsl(140, 60%, 45%)',
        warning: 'hsl(36, 80%, 50%)',
        error: 'hsl(0, 80%, 60%)',
        'text-primary': 'hsl(0, 0%, 95%)',
        'text-secondary': 'hsl(0, 0%, 75%)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
      },
      boxShadow: {
        'sm': '0 1px 2px hsla(0, 0%, 0%, 0.05)',
        'md': '0 4px 8px hsla(0, 0%, 0%, 0.1)',
        'lg': '0 8px 24px hsla(0, 0%, 0%, 0.12)',
        'xl': '0 12px 32px hsla(0, 0%, 0%, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
