var path = require('path'),
assets_path = path.join('app', 'assets', 'javascripts', 'components');

var config = {
  context: path.resolve(assets_path),
  entry: path.resolve(assets_path) + '/entry.js',
  output: {
    library: 'MobiComments',
    filename: 'bundle.js',
    path: path.resolve(assets_path)
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(assets_path)
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: '6to5-loader' }
    ]
  }
};

module.exports = config;
