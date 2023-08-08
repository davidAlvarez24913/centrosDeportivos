const path = require("path");

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and packages/schema */
        path.resolve("src"),
        path.resolve("../../packages/schema"),
      ]),
      // {
      //   module: {
      //     rules: [
      //       {
      //         test: /\.tsx?$/,
      //         use: [
      //           {
      //             loader: "typescript-loader",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    )(config, env)
  );
};