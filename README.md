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

