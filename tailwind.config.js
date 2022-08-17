module.exports = {
	content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin')],
};
