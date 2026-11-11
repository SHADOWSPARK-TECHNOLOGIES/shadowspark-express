import type { Config } from 'tailwindcss';

/** DHL-inspired palette (red #D40511 + yellow #FFCC00), clean light theme. */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#D40511', dark: '#A9030D', light: '#FF4D5A' },
        accent: { DEFAULT: '#FFCC00', dark: '#D4AA00' },
        ink: '#0a0a0a',
        muted: '#5b5b5b',
        dim: '#9a9a9a',
        line: '#e4e2e0',
        surface: '#f7f5f3',
        road: '#FFFFFF',
        green: '#1a7f4e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
