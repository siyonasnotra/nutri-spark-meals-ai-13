
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#4CAF50',
					foreground: '#ffffff',
					50: '#eefbee',
					100: '#d7f4d8',
					200: '#b0e8b2',
					300: '#7ad77d',
					400: '#4CAF50',
					500: '#3d9a40',
					600: '#2e7a31',
					700: '#266129',
					800: '#214f24',
					900: '#1d411f',
				},
				secondary: {
					DEFAULT: '#FF9800',
					foreground: '#ffffff',
					50: '#fff9e6',
					100: '#ffefc0',
					200: '#ffdb80',
					300: '#ffc240',
					400: '#FF9800',
					500: '#e68900',
					600: '#cc7a00',
					700: '#a36200',
					800: '#855000',
					900: '#704400',
				},
				accent: {
					DEFAULT: '#9C27B0',
					foreground: '#ffffff',
					50: '#f8e6fb',
					100: '#eec0f6',
					200: '#dc80ec',
					300: '#c840de',
					400: '#9C27B0',
					500: '#8c239e',
					600: '#701c7f',
					700: '#591666',
					800: '#491252',
					900: '#3e0f45',
				},
				info: {
					DEFAULT: '#2196F3',
					foreground: '#ffffff',
					50: '#e8f4fe',
					100: '#c6e4fd',
					200: '#94cffc',
					300: '#61b8fa',
					400: '#2196F3',
					500: '#0d8aed',
					600: '#0b78d1',
					700: '#0a62aa',
					800: '#085088',
					900: '#074270',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"scale-in": "scale-in 0.2s ease-out",
				"enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
