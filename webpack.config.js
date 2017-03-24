const { resolve } = require('path');

module.exports = {
  devtool: 'source-map',
  context: resolve(__dirname, 'src/'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    inline: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
