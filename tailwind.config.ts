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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// ProofPass specific colors
				'navy-deep': 'hsl(var(--navy-deep))',
				'navy-medium': 'hsl(var(--navy-medium))',
				'navy-light': 'hsl(var(--navy-light))',
				'electric-blue': 'hsl(var(--electric-blue))',
				'electric-blue-dim': 'hsl(var(--electric-blue-dim))',
				'electric-blue-glow': 'hsl(var(--electric-blue-glow))',
				'off-white': 'hsl(var(--off-white))',
				'verification-green': 'hsl(var(--verification-green))',
				'verification-green-pulse': 'hsl(var(--verification-green-pulse))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-verification': 'var(--gradient-verification)'
			},
			boxShadow: {
				'glow-blue': 'var(--shadow-glow-blue)',
				'glow-green': 'var(--shadow-glow-green)',
				'glass': 'var(--shadow-glass)',
				'floating': 'var(--shadow-floating)'
			},
			backdropBlur: {
				'glass': '20px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// ProofPass animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--electric-blue) / 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--electric-blue) / 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'verification-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 15px hsl(var(--verification-green) / 0.4)' 
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--verification-green) / 0.8)' 
					}
				},
				'slide-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'particle-float': {
					'0%': { 
						transform: 'translate(0px, 0px) scale(1)',
						opacity: '0.6'
					},
					'33%': { 
						transform: 'translate(30px, -20px) scale(1.1)',
						opacity: '1'
					},
					'66%': { 
						transform: 'translate(-20px, -40px) scale(0.9)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'translate(0px, -60px) scale(0.8)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'verification-pulse': 'verification-pulse 1.5s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'particle-float': 'particle-float 4s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
