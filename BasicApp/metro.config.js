const path = require('path');
const env = require('./env');

const appModules = [
  //path.resolve(env.EVA_PACKAGES_PATH, 'dss'), 
];

const extraNodeModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),

  //components
  'fecha': path.resolve(__dirname, './node_modules/fecha'),
  'hoist-non-react-statics': path.resolve(__dirname, './node_modules/hoist-non-react-statics'),
  'lodash.merge': path.resolve(__dirname, './node_modules/lodash.merge'),
  'react-native-svg': path.resolve(__dirname, './node_modules/react-native-svg'),

  //date-fns
  'date-fns': path.resolve(__dirname, './node_modules/date-fns'),

  //eva-icons
  'react-native-eva-icons': path.resolve(__dirname, './node_modules/react-native-eva-icons'),

  //moment
  'moment': path.resolve(__dirname, './node_modules/moment'),
  'react-is': path.resolve(__dirname, './node_modules/react-is'),
};

module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: { extraNodeModules },
  watchFolders: appModules,
};
