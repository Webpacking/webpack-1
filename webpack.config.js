module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: './index.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};
