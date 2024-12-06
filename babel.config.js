module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
<<<<<<< HEAD
          blocklist: null,
          allowlist: null,
          safe: false,
=======
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
          allowUndefined: true,
        },
      ],
    ],
  };
};