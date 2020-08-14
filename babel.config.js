module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 新增的部分
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};