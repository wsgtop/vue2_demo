const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const Version = new Date()
  .getTime()
  .toString()
  .match(/.*(.{8})/)[1]; // 截取时间戳后八位

module.exports = {
  // 打包文件增加版本号，缓存问题处理
  configureWebpack: {
    output: {
      filename: `js/[name].${Version}.js`,
      chunkFilename: `js/[name].${Version}.js`,
    },
  },
  lintOnSave: false,
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("./src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
