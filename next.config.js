const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};
