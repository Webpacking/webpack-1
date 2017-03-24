module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}dist`, // This requires an absolute path in ver. 2
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
