const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/client/app/prodDist.jsx',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }, 
     {
       test: /\.css$/,
       exclude: /dayPicker\.css$/,
       loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    filename: 'bundle-prod.js',
    path: path.resolve(__dirname, 'src/public'),
    publicPath: '/'
  },
  plugins: [
    new Dotenv()
  ],
}; 