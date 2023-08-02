/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            cellphone: "320px",
            // => @media (min-width: 320px) { ... }

            tablet: "560px",
            // => @media (max-width: 560px) { ... }

            laptop: "800px",
            // => @media (min-width: 800px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
