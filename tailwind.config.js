/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        heading: ['Prompt', 'sans-serif'],
      },
    },
  },
  safelist: [
    'hidden',
    'bg-indigo-600',
    'text-white',
    'font-bold',
    'shadow-xs',
    'shadow-sm',
    'text-slate-600',
    'hover:bg-indigo-50',
    'hover:text-indigo-700',
    'text-indigo-200',
    'text-slate-400',
    'accordion-open',
    '-translate-x-full',
    'translate-x-0',
    'overflow-hidden',
    'sol-revealed'
  ],
  plugins: [],
}
