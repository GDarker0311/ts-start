const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'react-libs.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'reactLibs',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'babel-loader', 
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript'
        ]
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodsah',
      amd: 'lodash',
      root: '_'
    }
  }
}