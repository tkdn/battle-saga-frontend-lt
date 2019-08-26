# あまりにも苦しい、怪談のような webpack plugin

供養も兼ねて作ってはいけなかったような気がする、禁忌の自作 webpack plugin を 3 点紹介します。

## event
- [Build Battle Saga ~ Frontend ~ - connpass](https://battle-saga-jp.connpass.com/event/142700/)

## Es3ifyPlugin
- ES3... for Android 2.x
- [source](./build/webpackPlugin/Es3ifyPlugin.js)

## DefinePropertyPatchPlugin
- `Object.defineProperty` のバグ... for Android 4.0.x
- [source](./build/webpackPlugin/DefinePropertyPatchPlugin.js)

## AllowMutateEsmExportsPlugin
- webpack 2　では override 出来たのに... テストダブルのために ES Modules を裏切るプラグイン
- [source](./build/webpackPlugin/AllowMutateEsmExportsPlugin.js)
