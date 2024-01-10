# Sass Configuration
To leverage a CSS preprocessor we have to include additonal dependencies and add them to our configuration.

## Sass Dependencies

- [sass-loader](https://www.npmjs.com/package/sass-loader) loads a SASS/SCSS file and compiles it to CSS.
- [sass](https://www.npmjs.com/package/sass) CSS preprocessor.

```bash
npm install --save-dev sass-loader sass
```

## Sass Webpack Configuration
Now that we have our dependencies installed we can tell webpack to leverge them for SASS files.

Inside webpack.config.js:
```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // Checks for SASS and CSS files
     {
      test: /\.sass|.scss|.css$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  }
}
```