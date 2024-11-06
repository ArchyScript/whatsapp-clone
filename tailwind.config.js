// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1520px',
      },
    },
    extend: {
      colors: {
        test: 'var(--test)',
        border: {
          light: 'var(--border-light)',
          dark: 'var(--border-dark)',
        },
        input: {
          light: 'var(--input-light)',
          dark: 'var(--input-dark)',
        },
        ring: {
          light: 'var(--ring-light)',
          dark: 'var(--ring-dark)',
        },
        main: {
          light: 'var(--main-light)',
          dark: 'var(--main-dark)',
        },
        secondary: {
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
        panel: {
          light: 'var(--panel-light)',
          dark: 'var(--panel-dark)',
        },
        accent: {
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        hover: {
          light: 'var(--hover-light)',
          dark: 'var(--hover-dark)',
        },
        primary: {
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
          chatLight: 'var(--primary-chat-light)',
          chatDark: 'var(--primary-chat-dark)',
        },
        gray: {
          primary: {
            light: 'var(--gray-primary-light)',
            dark: 'var(--gray-primary-dark)',
          },
          secondary: {
            light: 'var(--gray-secondary-light)',
            dark: 'var(--gray-secondary-dark)',
          },
        },
      },
      backgroundColor: {
        container: 'var(--container)',
        'gray-primary': 'var(--gray-primary)',
        'gray-secondary': 'var(--gray-secondary)',
        'gray-tertiary': 'var(--gray-tertiary)',
        'left-panel': 'var(--left-panel)',
        'chat-background': 'var(--chat-background)',
        'chat-hover': 'var(--chat-hover)',
        'green-primary': 'var(--green-primary)',
        'green-chat': 'var(--green-chat)',
      },
      backgroundImage: {
        'chat-tile-light': "url('/bg-light.png')",
        'chat-tile-dark': "url('/bg-dark.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
