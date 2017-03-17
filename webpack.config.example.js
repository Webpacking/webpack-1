// This is the recommended configuration but not bare-bones

const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, 'src/'),
  entry: {
    app: './index.js',
    vendor: ['lodash', 'sha.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};
