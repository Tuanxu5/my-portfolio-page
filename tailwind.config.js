/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements/dist/js/**/*.js"
]
export const theme = {
  extend: {}
}
export const plugins = ["flowbite/plugin", "tw-elements/dist/plugin.cjs"]
