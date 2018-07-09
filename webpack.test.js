const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@pkg': path.join(process.cwd(), 'packages'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devtool: '#eval-source-map',
  externals: [require('webpack-node-externals')()]
}
