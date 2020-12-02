const GetEnv = require("getenv");

const GitRevisionPlugin = require("git-revision-webpack-plugin");

const gitRevisionPlugin = new GitRevisionPlugin();

GetEnv.disableErrors();

const Env = GetEnv.multi({
  COMMITHASH: ["COMMITHASH", "" + gitRevisionPlugin.commithash(), "string"],
  SENTRY_RELEASE: [
    "SENTRY_RELEASE",
    "" +
      gitRevisionPlugin.branch().replace(/\//g, "-") +
      "-" +
      gitRevisionPlugin.version(),
    "string"
  ]
});

module.exports = Env;
