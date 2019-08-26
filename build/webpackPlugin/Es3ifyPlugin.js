const es3ify = require("es3-safe-recast").compile;
const ConcatSource = require("webpack-sources/lib/ConcatSource");

module.exports = class Es3ifyPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap("Es3ifyPlugin", compilation => {
            Object.keys(compilation.assets)
                .filter(file => /\.js$/.test(file))
                .forEach(file => {
                    const asset = compilation.assets[file];
                    compilation.assets[file] =
                        new ConcatSource(es3ify(asset.source(), {
                            trailingComma: true,
                        }));
                });
            }
        );
    }
}
