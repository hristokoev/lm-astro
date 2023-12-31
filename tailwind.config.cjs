/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'aquamarine': {
					'50': '#e9fff7',
					'100': '#caffe9',
					'200': '#99ffda',
					'300': '#5dfdcb',
					'400': '#17f0b3',
					'500': '#00d89d',
					'600': '#00b082',
					'700': '#008d6c',
					'800': '#006f56',
					'900': '#005b49',
					'950': '#00342a',
				},
				'hot-pink': {
					'50': '#fef1f8',
					'100': '#fee5f2',
					'200': '#ffcbe8',
					'300': '#ffa1d3',
					'400': '#ff69b4',
					'500': '#fa3a95',
					'600': '#ea1870',
					'700': '#cc0a57',
					'800': '#a80c47',
					'900': '#8c0f3e',
					'950': '#560121',
				},
				'malibu': {
					'50': '#eff8ff',
					'100': '#dbedfe',
					'200': '#bee1ff',
					'300': '#7cc6fe',
					'400': '#5eb4fc',
					'500': '#3995f8',
					'600': '#2376ed',
					'700': '#1b60da',
					'800': '#1c4eb1',
					'900': '#1d448b',
					'950': '#162b55',
				},
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				hkgrotesk: ['HK Grotesk', 'sans-serif'],
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1.5' }],
				sm: ['0.875rem', { lineHeight: '1.5715' }],
				base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
				lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
				xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
				'2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
				'3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
				'4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
				'5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.017em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
				'7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
			},
			letterSpacing: {
				tighter: '-0.02em',
				tight: '-0.01em',
				normal: '0',
				wide: '0.01em',
				wider: '0.02em',
				widest: '0.4em',
			},
		},
	},
	plugins: [],
}
