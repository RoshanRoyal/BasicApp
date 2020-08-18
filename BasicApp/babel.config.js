const path = require('path');
const env = require('./env');

const frameworkAlias = {
};

const frameworkInternalAlias = {
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...frameworkAlias,
    ...frameworkInternalAlias,
  },
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', moduleResolverConfig]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};