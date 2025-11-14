/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			"raleway": ["Raleway", "sans-serif"],
		},
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'obscure': '#1E1613',
			'blank': '#D9D9D9',
			'blank-dark': '#9CA2C3',
			'blank-light': '#CFDCE7',
			'primary': '#3085B1',
			'second': '#CF9065',
			'second-dark': '#63815E',
			'second-light': '#CA8589',
			...colors,
		}
	},
	darkMode: ['class'],
	plugins: [],
}
