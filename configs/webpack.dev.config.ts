import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { common } from './webpack.common.config';

const devOptions = {
  devServer: {
    compress: false,
    port: 4000,
    bonjour: false,
  },
};

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  ...devOptions,
} as Configuration;

export default merge(common, devConfig);
