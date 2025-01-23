/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Poppins", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: {
					100: '#E8D8F8',
					200: '#D4B8F2',
					300: '#BE97EC',
					400: '#A978E6',
					500: '#A16DE3',
					600: '#864DC6',
					700: '#6B37AA',
					800: '#51288E',
					900: '#482072',
					950: '#321553',
				},
				secondary: {
					100: '#FFF4E0', // Color más claro
					200: '#FFE4B8',
					300: '#FFD390',
					400: '#FFC368',
					500: '#FFAC39', // Color principal
					600: '#E69733',
					700: '#CC822D',
					800: '#B36E27',
					900: '#8A541E', // Color más oscuro
					950: '#6A4017', // Muy oscuro
				}
			},
		},
	},
	plugins: [],
}
