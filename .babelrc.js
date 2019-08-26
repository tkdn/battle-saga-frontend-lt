module.exports = {
    presets: [
        ["@babel/env", {
            targets: {
                browsers: ["android >= 2"]
            },
            useBuiltIns: "usage",
            // debug: true,
            modules: false,
            loose: true,
            corejs: 3
        }],
        "@babel/typescript",
    ],
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
    ],
};
