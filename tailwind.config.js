/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			Poppins: "Nunito",
		},
		extend: {
			colors: {
				primary: "#aaf2f0",
				tealColor: "#2F6C6D",
				hummingBirdColor: "#d1f1ee",
				yellowColor: "##f2dbaa",
				solitudeColor: "#e9e9ea",
				grayColor: "#4B4B4C",
			},
			animation: {
				slide: "slide 25s linear infinite",
			},
			keyframes: {
				slide: {
					"0%,100%": { transform: "translateX(5%)" },
					"50%": { transform: "translateX(-120%)" },
				},
			},
		},

	},
	plugins: [
		// eslint-disable-next-line no-undef
		require("flowbite/plugin"),
	],
};
