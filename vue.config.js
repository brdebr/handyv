module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          target: "portable",
        },
      },
    },
  }
};
