const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  mode: "development",
  output: {
    publicPath: "https://localhost:8000/",
    chunkFilename: "[id].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css"],
    alias: {
      "process": "process-browserify",
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    historyApiFallback: true,
    https: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          plugins: ["relay"]
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "coaching",
      filename: "remoteEntry.js",
      remotes: {
        shell: "ui_shell@https://localhost:5000/remoteEntry.js",
      },
      exposes: {
        "./Coaching": "./src/Coaching",
        "./Mission": "./src/Mission",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "react-intl": {
            singleton: true,
            requiredVersion: deps["react-intl"],
          },
          '@mindtickle/relay-core': {
            singleton: true,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
