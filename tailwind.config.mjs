import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				content: "1400px"
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [],
}
