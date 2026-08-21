/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D11',
        panel: '#12151B',
        raised: '#171B22',
        line: '#232932',
        lineStrong: '#333B47',
        fg: '#EDEDEA',
        muted: '#99A1AD',
        dim: '#6B7480',
        amber: {
          DEFAULT: '#E0A94A',
          soft: '#1C1A14',
          line: '#4A3A1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '68rem',
      },
    },
  },
  plugins: [],
};
