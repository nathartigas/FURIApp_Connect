/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos na pasta "app"
    "./components/**/*.{js,ts,jsx,tsx}", // Inclui componentes reutilizáveis
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclui a pasta "pages" (se existir)
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37", // Cor personalizada "gold"
      },
    },
  },
  plugins: [],
};