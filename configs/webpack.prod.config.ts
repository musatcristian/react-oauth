import { resolve } from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin, { loader as cssLoader } from 'mini-css-extract-plugin';

import { common } from './webpack.common.config';

const prodConfig = {
  mode: 'production',
  output: {
    path: resolve(__dirname, '../__dist__'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    emitOnErrors: false,
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: cssLoader,
          },
          'css-loader',
        ],
      },
    ],
  },
} as Configuration;

export default merge(common, prodConfig);
