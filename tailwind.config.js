/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FAFAFA',
          surface: '#F3F4F6',
          charcoal: '#111827',
          'charcoal-muted': '#374151',
          border: '#E5E7EB',
          blue: '#1E40AF',
          'blue-hover': '#1E3A8A', 
          whatsapp: '#25D366',
          warning: '#F59E0B',
          error: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
      },
      boxShadow: {
        'editorial': '0 4px 40px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}