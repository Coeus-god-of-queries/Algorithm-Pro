/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ 'style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('node-sass'),
          }
        }]
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: 'file-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({template: './client/index.html'})],

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'), 
      publicPath: '/build'
    },
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false
    }
  }
};