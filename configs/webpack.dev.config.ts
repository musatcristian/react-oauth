import { Configuration, DefinePlugin } from 'webpack';
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
  plugins: [
    new DefinePlugin({'process.env.API_URL': JSON.stringify('http://localhost:4001')})
  ],
  ...devOptions,
} as Configuration;

// const dev2 = (): Configuration => {
//   return ({
//       mode: 'development',
//       devtool: 'inline-source-map',
//       module: {
//         rules: [
//           {
//             test: /\.css$/,
//             use: ['style-loader', 'css-loader'],
//           },
//         ],
//       },
//       ...devOptions,
//     });
// }

export default merge(common, devConfig);
