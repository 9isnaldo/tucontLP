/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'ssm': '300px'
			},
			colors: {
				'rich-black': '#06081E',
				'oxford-blue': '#0D1439',
				'primary': {
					DEFAULT: '#1f4287'
				},
				'secondary': {
					DEFAULT: '#3D5AF1'
				},
				'tertiary': {
					DEFAULT: '#278ea5'
				},
				'quaternary': {
					DEFAULT: '#22D1EE'
				},
				'quintenary': {
					DEFAULT: '#21E6C1'
				},
				'sextiary': {
					DEFAULT: '#E2F3F5'
				}
			},
		},
	},
	plugins: [],
}
