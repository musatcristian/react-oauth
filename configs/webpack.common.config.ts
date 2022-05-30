import { Configuration  } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const common: Configuration = {
  context: resolve(__dirname, '../src'),
  entry: {
    main: './index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../static/templates/index.html'),
      title: 'Influencer compare',
      scriptLoading: 'defer',
      favicon: resolve(__dirname, '../static/images/favicon.ico'),
    }),
  ],
};

// export const common2 = (env: any, argv: any): Configuration => {

//   const envKeys = Object.keys(env).reduce((prev: any, next: any) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
//   }, {});

//   return ({
//     context: resolve(__dirname, '../src'),
//     entry: {
//       main: './index.tsx',
//     },
//     resolve: {
//       extensions: ['.ts', '.tsx', '.js', '.jsx'],
//     },
//     module: {
//       rules: [
//         {
//           test: /\.ts$|tsx$/,
//           use: {
//             loader: 'ts-loader',
//             options: {
//               transpileOnly: true,
//             },
//           },
//           exclude: /node_modules/,
//         },
//       ],
//     },
//     plugins: [
//       new DefinePlugin(envKeys),
//       new HtmlWebpackPlugin({
//         template: resolve(__dirname, '../static/templates/index.html'),
//         title: 'Influencer compare',
//         scriptLoading: 'defer',
//         favicon: resolve(__dirname, '../static/images/favicon.ico'),
//       }),
//     ],
//   })
// }
