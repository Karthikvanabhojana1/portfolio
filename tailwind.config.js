/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mooli': ['Mooli','cursive'],
        'protest-strike': ['Protest Strike'],
        'roboto': ['Roboto'],
        'shadows-into-light': ['Shadows Into Light', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [

  ],
}