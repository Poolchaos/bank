const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

const { NODE_ENV, API_BASE_PATH, LOCAL_USER_KEY } = process.env;

module.exports = {
  entry: "./src/index.tsx",
  mode: NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'awesome-typescript-loader' },
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(NODE_ENV == 'development' ? API_BASE_PATH : 'https://path/to/live/api'),
      LOCAL_USER_KEY: JSON.stringify(LOCAL_USER_KEY)
    }),
  ]
};