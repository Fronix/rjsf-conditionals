const BABEL_ENV = process.env.BABEL_ENV || process.env.NODE_ENV;

const defaultPlugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  // IE 11 support
  "@babel/plugin-transform-object-assign",
];

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: ["cjs", "test"].includes(BABEL_ENV) ? "commonjs" : false,
        targets:
          BABEL_ENV === "test" ? { node: "current" } : { browsers: "defaults" },
        corejs: 3,
      },
    ],
    "@babel/preset-react",
  ],
  env: {
    cjs: {
      plugins: [
        ...defaultPlugins,
        ["@babel/plugin-transform-runtime", { corejs: 3 }],
      ],
      ignore: ["test/**/*.js"],
    },
    umd: {
      plugins: [
        ...defaultPlugins,
        ["@babel/plugin-transform-runtime", { corejs: 3 }],
      ],
      ignore: ["test/**/*.js"],
    },
    es: {
      plugins: [
        ...defaultPlugins,
        ["@babel/plugin-transform-runtime", { useESModules: true, corejs: 3 }],
      ],
      ignore: ["test/**/*.js"],
    },
    test: {
      plugins: [
        ...defaultPlugins,
        ["@babel/plugin-transform-runtime", { corejs: 3 }],
      ],
      ignore: [],
    },
  },
};
