const ENV = require("./env.config"),
  webpack = require("webpack");

module.exports = (() => [
  new webpack.DefinePlugin({
    SENTRY_RELEASE: JSON.stringify(ENV.SENTRY_RELEASE),
    COMMITHASH: JSON.stringify(ENV.COMMITHASH)
  })
])();
