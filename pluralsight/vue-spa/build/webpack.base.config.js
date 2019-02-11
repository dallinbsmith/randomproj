const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          css: 'css-loader',
          'scss': 'css-loader|sass-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({ filename: "[name].css" }),
    	// new UglifyJsPlugin({
    	// 	cache: true,
    	// 	parallel: true
    	// })
 ]
};

module.exports = config;
