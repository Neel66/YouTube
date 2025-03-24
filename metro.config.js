const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Add extensions to resolve specific module types
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
    assetExts: ['png', 'jpg', 'jpeg', 'svg', 'ttf', 'otf'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
