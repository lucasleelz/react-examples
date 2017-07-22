# react-examples

## Environment
- node v7.9.0
- npm  v5.3.0

### react react-dom
安装 `react` `react-dom`。
```
npm i react react-dom
```
### Babel
使用Babel编译ES2016JSX。

#### Require Hook
`Require Hook` 在测试环境下编译Node.js
 优势：是编译与运行合二为一。性能消耗较大。因此在生成环境需要编译后再运行。
 原理：在require方法上加一个钩子。每次require加载JavaScript时会先用Babel进行编译，
仅仅用于开发环境。
```
npm i babel-register --save-dev
```
### ES2015 React 预设
安装预设。也只是用于开发环境。
```
npm i babel-preset-es2015 babel-preset-react --save-dev
```
添加预设配置文件.babelrc，激活ES2015、React

### 在Node.js中运行react
```
npm start
```

### webpack
使用webpack打包编译
ES2015 JSX语法游览器不能完全支持。所以需要webpack进行编译。
webpack只是打包，需要通过babel-loader实现编译。

#### 安装webpack babel-loader


# 错误集
## 需要使用具体的loaders。
```
ERROR in Entry module not found: Error: Can't resolve 'babel' in '/Users/luzhao/git_react_native/react-examples'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.
                 You need to specify 'babel-loader' instead of 'babel',
                 see https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed
```
把webpack下面的loader修改成具体的loaders: babel-loader

### 在浏览器中运行react
```
npm run build
```
编译后直接用浏览器打开`index.html`。