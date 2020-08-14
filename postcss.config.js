module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px2rem-exclude": {
            remUnit: 75,
            remPrecision: 2,
            exclude: /node_modules|folder_name/i
        }
    }
};