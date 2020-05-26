const path = require("path")

const srcPath = path.resolve(__dirname, "./libs");
const nodeModulePath = path.resolve(__dirname, "./node_modules");

export default {
  title: 'react-libs',
  codeSandbox: false,
  typescript: true,
  onCreateWebpackChain: config => {
    config.module
      .rule('ts')
      .include.add(srcPath)
      .end()
      .exclude.add(nodeModulePath)
      .end();
    return config;
  }
}