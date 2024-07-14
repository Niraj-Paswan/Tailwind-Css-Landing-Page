/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: 
    {
      colors:{
      'primary' : '#3238f2',
      'sec' : '#f8f9fa',
      'ter' : '#6c757d'
    },
      fontFamily: {
      'Nrj-fonts':['Poppins','sans-sarif']
    }
  },
  },
  plugins: [],
}

