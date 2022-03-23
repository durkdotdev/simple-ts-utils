const withTM = require("next-transpile-modules")(["simple-ts-utils"]);

module.exports = withTM({
  reactStrictMode: true,
});
