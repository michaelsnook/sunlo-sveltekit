/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,svg,svelte,html}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/forms'),
		require('daisyui'),
	],
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#663399',
				},
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#663399',
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
	},
}
