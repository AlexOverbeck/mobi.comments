// Run like this:
// cd client && npm run build:dev
// Note that Foreman (Procfile.dev) has also been configured to take care of this.
const webpack = require('webpack');

const devBuild = process.env.NODE_ENV !== 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: {

    // See use of 'vendor' in the CommonsChunkPlugin inclusion below.
    vendor: [
      'babel-core/polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'jquery',
      'jquery-ujs',
      'react',
      'react-dom'
    ],

    app: ['./app/startup/clientGlobals'],
  },
  output: {
    filename: 'client-bundle.js',
    path: '../app/assets/javascripts/generated',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js'],
  },
  plugins: [

    // https://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk
    new webpack.optimize.CommonsChunkPlugin({

      // This name 'vendor' ties into the entry definition
      name: 'vendor',

      // We don't want the default vendor.js name
      filename: 'vendor-bundle.js',

      // Passing Infinity just creates the commons chunk, but moves no modules into it.
      // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
      minChunks: Infinity,
    }),
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: require.resolve('react'), loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham'},

      // React is necessary for the client rendering:
      {test: require.resolve('react'), loader: 'expose?React'},
      {test: require.resolve('react-dom'), loader: 'expose?ReactDOM'},
      {test: require.resolve('jquery'), loader: 'expose?jQuery'},
      {test: require.resolve('jquery'), loader: 'expose?$'}
    ],
  },
};

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin()
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
