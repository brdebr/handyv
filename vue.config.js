module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: ["src/backend.ts", "src/persistence.ts"],
      builderOptions: {
        win: {
          target: "portable",
        },
      },
    },
  },
};
