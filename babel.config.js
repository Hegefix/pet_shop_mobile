module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@actions': './src/store/actions',
          '@reducers': './src/store/reducers',
          '@sagas': './src/store/sagas',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
