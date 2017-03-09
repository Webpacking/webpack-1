module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}dist`,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // { test: /\.js$/, loader: 'babel-loader' },
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
