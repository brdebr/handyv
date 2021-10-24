module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: ["src/backend.ts", "src/persistence.ts"],
      builderOptions: {
        win: {
          target: "portable",
        },
        portable: {
          splashImage: "src/assets/splash.bmp",
        },
      },
    },
  },
};
