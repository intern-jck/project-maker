const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'sass-loader', 'css-loader'],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.sass|.scss|.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/client/public'),
    },
    compress: true,
    port: 8080,
  },
};
