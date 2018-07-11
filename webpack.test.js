const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|vue)/,
        include: path.resolve('src'),
        use: ['istanbul-instrumenter-loader','babel-loader']
      },
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
  externals: [require('webpack-node-externals')()],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}
