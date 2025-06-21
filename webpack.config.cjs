const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production", // Set to 'development' or 'production' as needed
    entry: "./src/index.js", // Ensure the entry path is correct
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: "MyLibrary",
            type: "umd",
        },
        globalObject: "this",
    },
    externals: [
        "react",
        "react-dom",
        "redux",
        "react-redux",
        "redux-thunk",
        "@reduxjs/toolkit",
        "axios",
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
};
