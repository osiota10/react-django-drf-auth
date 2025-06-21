const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production", // Set to 'development' or 'production' as needed
    entry: "./src/index.ts", // Changed to .ts
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Add .ts and .tsx
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Test for .ts and .tsx files
                exclude: /node_modules/,
                use: 'ts-loader', // Use ts-loader for these files
            },
            {
                test: /\.jsx?$/, // Test for .js and .jsx files
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
