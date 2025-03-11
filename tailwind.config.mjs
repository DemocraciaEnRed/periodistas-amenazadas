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
			typography: () => ({
				primary: {
					css: {
						'--tw-prose-body': '#401F71',
						'--tw-prose-headings': '#482072',
						'--tw-prose-lead': '#6B37AA',
						'--tw-prose-links': '#482072',
						'--tw-prose-bold': '#482072',
						'--tw-prose-counters': '#864DC6',
						'--tw-prose-bullets': '#A978E6',
						'--tw-prose-hr': '#BE97EC',
						'--tw-prose-quotes': '#482072',
						'--tw-prose-quote-borders': '#BE97EC',
						'--tw-prose-captions': '#6B37AA',
						'--tw-prose-code': '#482072',
						'--tw-prose-pre-code': '#E8D8F8',
						'--tw-prose-pre-bg': '#482072',
						'--tw-prose-th-borders': '#BE97EC',
						'--tw-prose-td-borders': '#D4B8F2',
						'--tw-prose-invert-body': '#D4B8F2',
						'--tw-prose-invert-headings': 'var(--color-white)',
						'--tw-prose-invert-lead': '#BE97EC',
						'--tw-prose-invert-links': 'var(--color-white)',
						'--tw-prose-invert-bold': 'var(--color-white)',
						'--tw-prose-invert-counters': '#A978E6',
						'--tw-prose-invert-bullets': '#864DC6',
						'--tw-prose-invert-hr': '#6B37AA',
						'--tw-prose-invert-quotes': '#E8D8F8',
						'--tw-prose-invert-quote-borders': '#6B37AA',
						'--tw-prose-invert-captions': '#A978E6',
						'--tw-prose-invert-code': 'var(--color-white)',
						'--tw-prose-invert-pre-code': '#BE97EC',
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': '#864DC6',
						'--tw-prose-invert-td-borders': '#6B37AA',
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
