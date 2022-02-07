module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
	theme: {
		colors: {
			primary: {
				default: "#6F5643",
				shadow: "#644E3C",
			},
			secondary: "#E2DDBB",
			alternative: "#D2A24C",
			red: "#B70000",
		},
		fontFamily: {
			heading: ["Karen", "sans-serif"],
			body: ["Clash Display", "sans-serif"],
		},

		fontSize: {
			title: ["1.75rem", "1.673rem"],
			base: ["0.75rem", "0.923rem"],
			navLinks: ["1.75rem"],
		},
		extend: {
			borderRadius: {
				memoji: "2.25rem",
				"3xl": "1.5rem",
			},
		},

		screens: {
			xxs: "320px",
			// => @media (min-width: 320px) { ... },

			xs: "375px",
			// => @media (min-width: 375px) { ... },

			s: "390px",
			// => @media (min-width: 375px) { ... },

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			mobile: { min: "320px", max: "480px" },

			tablet: { min: "481px", max: "768px" },

			"s-screens": { min: "769px", max: "1024px" },

			"l-screens": { min: "1025px", max: "1200px" },

			"xl-screens": { min: "1201px" },
		},
	},
	plugins: [],
};
