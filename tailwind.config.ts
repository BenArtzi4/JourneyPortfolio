import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          elevated: "var(--background-elevated)",
          surface: "var(--background-surface)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
          subtle: "var(--foreground-subtle)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-primary-hover)",
          glow: "var(--accent-glow)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.006em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.006em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.011em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.014em' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.019em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.021em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.022em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.024em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px var(--glow-soft)',
        'glow': '0 0 40px var(--glow-medium)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
