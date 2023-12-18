/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-primary': '#06081E',
				'background-secondary': '#0D1439',
				'primary-color': '#1f4287',
				'secondary-color': '#3D5AF1',
				'tertiary-color': '#278ea5',
				'quaternary-color': '#22D1EE',
				'quintenary-color': '#21E6C1',
				'sextiary-color': '#e2f2f4'
			},
		},
	},
	plugins: [],
}
