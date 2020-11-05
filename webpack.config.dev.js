const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./dev/index"
  },
  output: {
    path: path.join(__dirname, "dev/static"),
    filename: "[name].js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: [
      path.join(__dirname, "dev"),
      path.join(__dirname, "dist")
    ],
    compress: true,
    port: 9000
  }
};