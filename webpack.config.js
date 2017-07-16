// path module can generate correct path on different OS
const path = require('path');
// extract css to single file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // Entry point of webpack, usually is index.js
  entry: './src/index.js', // Reference path
  // Where the bundled file should be put
  output: {
    // Absolute path
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // add public path for url loader to find new path of build images
    // it will prepend build/{hashedimaged}.jpg to import big from 'assets/big.jpg'
    publicPath: 'build/',
  },
  // Place different loaders and rules which apply
  module: {
    // Many rules so present as array
    rules: [
      {
        // use babel-loader
        use: 'babel-loader',
        // process only .js files
        // /\ <- start
        // $/ <- close
        test: /\.js$/,
      },
      {
        // order is important, read from right to left
        // use: ['style-loader','css-loader'],
        // nasty way to use ExtractTextPlugin with webpack 1.0
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        // process only .js files
        test: /\.css$/,
      },
      {
        use: [
          // need to pass new config to url-loader(big or small files)
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
        // e? <- wether with e or not will do
        test: /\.(jpe?g|png|gif|svg)$/,
      },
    ],
  },
  plugins: [
    // Combine all css file to this style.css
    new ExtractTextPlugin('style.css'),
  ]
};

module.exports= config;
