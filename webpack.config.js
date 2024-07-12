const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    main: "./src/my-connect.js",
  },
  output: {
    filename: "index.js", // js文件输出目录
    path: path.resolve(__dirname, "./"), // 绝对路径 相对config/
    library: {type: 'module'}
  },
  experiments: {
    outputModule: true
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
