module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5E6E8', // Soft pink for maternity theme
        secondary: '#A8DADC', // Light blue for infant theme
        accent: '#E63946', // Bold red for highlights
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 