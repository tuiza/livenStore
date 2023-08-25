module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          screens: "./src/Screens",
          services: "./src/Services",
          components: "./src/components",
        },
      },
    ],
  ],
};
