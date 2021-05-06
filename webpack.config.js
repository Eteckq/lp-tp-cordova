const path = require("path");
module.exports = {
  mode: "development",
  entry: "./www/js/index.js",
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "js/bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "www/js"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
