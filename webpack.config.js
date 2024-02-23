const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js.js', //TODO switch to .ts eventually
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map", //MAYBE TODO "inline-source-map" ??
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".svg"],
    },
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" },
        { test: /\.(png|svg)$/i, type: 'asset/resource' },
        { test: /\.css$/i, use: ["style-loader", "css-loader"], },
      ],
    },
    devServer: {
      static: false/* {
        directory: path.join(__dirname, 'public'),
      } */,
      compress: true,
      port: 9000
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Your Knight Moveth',
      }),
    ],
};