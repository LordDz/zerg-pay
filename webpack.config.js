const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
      enums: path.resolve(__dirname, "src/enums/"),
      helpers: path.resolve(__dirname, "src/helpers/"),
      assets: path.resolve(__dirname, "src/assets/"),
    },
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/, // Handle inline SVGs
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-react"],
                },
              },
              "svg-inline-loader",
            ],
          },
          {
            use: "@svgr/webpack", // Convert SVG to React components
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
