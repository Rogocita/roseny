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
			'blank-dark': '#6EA9C8',
			'blank-light': '#CFDCE7',
			'primary': '#3085B1',
			'primary-dark': '#4a8aab',
			'second': '#CF9065',
			'second-dark': '#94dfec',
			'second-light': '#CA8589',
			...colors,
		}
	},
	darkMode: ['class'],
	plugins: [],
}
