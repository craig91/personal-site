const path = require('path');
module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-react-jsx-img-import"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "./images/[hash].[ext]"
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["*", ".js", ".jsx" ]
  }
};
