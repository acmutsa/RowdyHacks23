module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./components-rh/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'permanent-marker': ['Permanent Marker', 'cursive'],
				poppins: ['Poppins', 'sans-serif'],
			},
			width: {
				'1/8': '12.5%',
				'3/8': '37.5%',
				'5/8': '62.5%',
				'7/8': '87.5%',
				'1/7': '14.29%',
				'6/7': '85.71%',
			},
			height: {
				'9/10': '90%',
			},
			minWidth: {
				64: '16rem',
				56: '14rem',
				'160px': '160px',
				'3/4': '75%',
				'9/10': '90%',
			},
			minHeight: {
				'1/3': '33.33%',
				'9/10': '90%',
				'1/2': '50%',
				'1/4': '25%',
				'5/8': '62.5%',
				16: '4rem',
			},
			// backgroundImage: {
			// 	'hero-pattern': `url(${'/assets/bg2.jpeg'})`, // !change
			// },
			colors: {
				'rh-white': '#FFF',
				'rh-black': '#000',
				'rh-deep-purple': '#2D112B',
				'rh-sunset': '#FF583D',
				'rh-forrest': '#047857',
				'rh-ocean-blue': '#0066CC',
				'rh-space-blue': 'rgb(15, 23, 42)',
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
		},
	},
	plugins: [],
};
