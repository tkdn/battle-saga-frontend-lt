/**
 * `Object.defineProperty Bug` Patch Plugin
 *
 * @see https://github.com/facebook/create-react-app/issues/2602
 * @see https://bugs.chromium.org/p/v8/issues/detail?id=1530
 */
const ConcatSource = require("webpack-sources/lib/ConcatSource");
const patch = `(function(){
var defineProperty = Object.defineProperty;
Object.defineProperty = function (exports, name) {
    if (name === "__esModule") {
        exports[name] = true;
        return;
    }
    return defineProperty.apply(this, arguments);
};
})();`;

module.exports = class DefinePropertyPatchPlugin {
    apply(compiler) {
        compiler.hooks.afterCompile.tap("DefinePropertyPatchPlugin", compilation => {
            Object.keys(compilation.assets)
                .filter(file => /\.js$/.test(file))
                .forEach(file => {
                    const asset = compilation.assets[file];
                    compilation.assets[file] = 
                        new ConcatSource(patch + asset.source());
                });
        });
    }
}
