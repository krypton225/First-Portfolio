const path = require("path");

module.exports = {
    entry: "./js/main.js",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist/js"),
    },
    mode: "production",
};