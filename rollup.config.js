// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import babel from '@rollup/plugin-babel';
// import replace from '@rollup/plugin-replace';
// import terser from '@rollup/plugin-terser';
// import postcss from 'rollup-plugin-postcss';

// export default {
//     input: 'src/index.js', // entry point of your application
//     output: {
//         file: 'dist/bundle.js',
//         format: 'iife', // Immediately Invoked Function Expression, suitable for <script> tags
//         sourcemap: true
//     },
//     plugins: [
//         resolve({
//             extensions: ['.js', '.jsx']
//         }),
//         commonjs(),
//         babel({
//             exclude: 'node_modules/**',
//             babelHelpers: 'bundled',
//             presets: ['@babel/preset-env', '@babel/preset-react']
//         }),
//         replace({
//             'process.env.NODE_ENV': JSON.stringify('production'),
//             preventAssignment: true
//         }),
//         postcss({
//             extract: false, // Set to true if you want to extract CSS to a separate file
//             minimize: true,
//             modules: true
//         }),
//         terser() // Minify the bundle
//     ]
// };


import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        // {
        //     file: 'dist/index.umd.js',
        //     format: 'umd',
        //     name: 'MyLibrary', // The name of the global variable in UMD format
        //     exports: 'default', // Specify default export
        //     sourcemap: true,
        // }
    ],
    external: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', '@reduxjs/toolkit', 'axios',
        'zlib',
        'http',
        'https',
        'util',
        'stream',
        'url',
        'tty',
        'assert',
        'os',
        'fs',
        'path',],
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx'], // Add .jsx extension here
            preferBuiltins: false, // Set this to false to prefer local modules over built-in
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        json(), // Add this line to handle JSON imports
        terser(),
    ],
};

