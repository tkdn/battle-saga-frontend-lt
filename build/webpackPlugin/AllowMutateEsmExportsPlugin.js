module.exports = class AllowMutateEsmExportsPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap("AllowMutateEsmExportsPlugin", (compilation) => {
            compilation.mainTemplate.hooks.requireExtensions.tap("AllowMutateEsmExportsPlugin", source =>
                source.replace("Object.defineProperty(exports, name, { enumerable: true, get: getter });",
                    `Object.defineProperty(exports, name, {
                        enumerable: true,
                        configurable: true,
                        get: getter
                    });`
                )
            )
          });
    }
}
