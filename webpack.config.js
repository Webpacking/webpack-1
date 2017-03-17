module.exports = {
  context: `${__dirname}/src`, // '__dirname' is required here for webpack 1.14.0
  entry: {
    app: './index.js',
    vendor: ['lodash', 'sha.js']
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      // A good test here is to add 'exclude: /node_modules/' and notice the build times
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};
