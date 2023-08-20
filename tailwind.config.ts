import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#44fa6b',
				secondary: '#00a8ff',
				light: '#fff',
				'light-content': '#262626',
				'light-hover': '#e2e3e5',
				'light-border': '#c0c0c0',
				dark: '#000a0f',
				'dark-content': '#f5f5f5',
				'dark-hover': '#111b1f',
				'dark-border': '#222c2f',
			},
			keyframes: {
				loading: {
					'0%, 90%': { opacity: '1' },
					'100%': { opacity: '0', visibility: 'hidden' },
				},
				'loading-bar': {
					from: { width: '0' },
					to: { width: '100%' },
				},
			},
			animation: {
				loading: 'loading 3s forwards',
				'loading-bar': 'loading-bar 2.25s .5s forwards',
				underline: 'loading-bar 0.5s forwards',
			},
		},
	},
	plugins: [],
};
export default config;
