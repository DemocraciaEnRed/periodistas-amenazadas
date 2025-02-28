/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
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
					900: '#401F71',
					950: '#482072',
				},
				secondary: {
					50: "#FFECEB",  // Muy claro
					100: "#FFD4D1",
					200: "#FFB0AA",
					300: "#FF8C82",
					400: "#FF685B",
					500: "#FF4C39",  // Color principal
					600: "#E04330",
					700: "#B93527",
					800: "#8F281D",
					900: "#661B14"   
				},
				terciary: {
					50: '#FFF8F0',
					100: '#FFF0E0',
					200: '#FFE0C0',
					300: '#FFD1A1',
					400: '#FFC181',
					500: '#FFAC39', // Color principal
					600: '#E69B33',
					700: '#CC8A2D',
					800: '#B37927',
					900: '#996821',
				}
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
