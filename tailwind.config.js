/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#0da6f2",
                "primary-dark": "#0b8bc9",
                "background-light": "#f5f7f8",
                "background-dark": "#101c22",
                surface: "#182b34",
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
}
