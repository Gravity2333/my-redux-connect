const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    main: "./src/my-connect.js",
  },
  output: {
    filename: "index.js", // js文件输出目录
    path: path.resolve(__dirname, "./src"), // 绝对路径 相对config/
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
