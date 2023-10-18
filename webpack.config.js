/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const IS_DEV = process.env.MODE === 'development';

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MODE': JSON.stringify(process.env.MODE),
    }),
  ],
  entry: {
    app: APP_DIR + '/index.tsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(s*)css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: IS_DEV,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: IS_DEV } },
        ],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
              // sourceMap: IS_DEV,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: IS_DEV } },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    watchFiles: ['src/client/*.*', 'public/**/*'],
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
