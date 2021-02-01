const HtmlWebpackPlugin = require("html-webpack-plugin");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const Env = require("./env.config");
const globalPlugin = require("./globalPlugin");

const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js"
  },
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
    https: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "uma",
      filename: "remoteEntry.js",
      remotes: {
        shell: "ui_shell@https://localhost:5000/remoteEntry.js"
      },
      exposes: {
        "./ProfileManagement": "./src/ProfileManagement",
        "./UserManagement": "./src/UserManagement"
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          },
          "react-intl": {
            singleton: true,
            requiredVersion: deps["react-intl"]
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"]
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new SentryCliPlugin({
      include: ".",
      ignore: ["node_modules", "webpack.config.js"],
      // configFile: "sentry.properties",
      release: Env.SENTRY_RELEASE
      // ignoreFile: ".sentrycliignore"
    }),
    ...globalPlugin
  ]
};
