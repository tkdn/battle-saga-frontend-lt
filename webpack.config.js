const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const Es3ifyPlugin = require("./build/webpackPlugin/Es3ifyPlugin");
const DefinePropertyPatchPlugin = require("./build/webpackPlugin/DefinePropertyPatchPlugin");
const AllowMutateEsmExportsPlugin = require("./build/webpackPlugin/AllowMutateEsmExportsPlugin");

const env = process.env.NODE_ENV;
const isProd = env === "production";
const isTest = env === "test";

/** @type import("webpack").Configuration */
module.exports = {
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "source-map",
    entry: {
        bundle: "./src/index.ts",
        "test/modules.test": "./test/modules.test.ts",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },
    plugins: [
        new DefinePropertyPatchPlugin(),
    ].concat(isTest ? [
        new AllowMutateEsmExportsPlugin(),
    ] : []),
    optimization: {
        minimizer: isProd ? [
            new TerserPlugin(),
            new Es3ifyPlugin(),
        ] : [],
    },
};
