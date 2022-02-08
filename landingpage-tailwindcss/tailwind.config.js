module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Volkhof', 'serif']
            },
            colors: {
                gray: {
                    58: '#F6FAFD',
                },
                orange: {
                    DEFAULT: '#f75e11',
                },
                blue: {
                    DEFAULT: '#2811f7',
                },
                pink: {
                    DEFAULT: '#f739ab',
                },
            },
            zIndex: {
                '-1': '-1',
            },
            fontSize: {
                '6xl': ['3.5rem', '4.25rem']
            },
        },
    },
    plugins: [],
}