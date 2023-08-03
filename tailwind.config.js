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
            largecellphone: "650px",
            // => @media (min-width: 650px) { ... }
            tablet: "930px",
            // => @media (min-width: 930px) { ... }
            laptop: "1020px",
            // => @media (min-width: 1020px) { ... }
            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            lineHeight: {
                "extra-loose": "0.8rem",
            },
            fontSize: {
                xxx: "0.5rem",
                xxy: "0.6rem",
                xxs: "0.7rem",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/line-clamp"),
    ],
};
