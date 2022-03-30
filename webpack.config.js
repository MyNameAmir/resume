const path = require('path');
module.exports = {
mode:"production",
devtool:"source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
    module: {
        rules: [
            {
              test:/\.css$/,
              use:['style-loader', 'css-loader']
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i, 
              loader: 'file-loader',
              options: {
                name: '/public/[name].[ext]'
              }
          },
            { test: /\.m?js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react' ]
                }
              }
            }

        ]
    }

};