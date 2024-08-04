const HtmlWebpackPlugin = require('html-webpack-plugin');

const FileManagerPlugin = require('filemanager-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production'){
  mode = 'production'
}

console.log('mode', mode);

module.exports = {

    mode:mode,

    entry:{
        main: './src/index.js'
    },
    output:{
        filename: `[name].js`,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: path.join('', '[name][ext]'),
    },
    devServer: {
        port: 8080,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to:   path.resolve(__dirname, 'dist/images')
                }
              ],
          }),
        new HtmlWebpackPlugin(
        {
            title:'Teetan21',
            template: path.resolve(__dirname,'src/index.html')
        }
    ),
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: ['dist'],
            },
        },
    }),
    new MiniCssExtractPlugin(),
    
],
module:{
    rules:[
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
        {
            test: /\.(scss|css)$/,
            use: [ 
                (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader:'postcss-loader',
                  options:{
                    postcssOptions:{
                      plugins:[
                        [
                          'postcss-preset-env'
                        ]
                      ]
                    }
                  }
                },
                'sass-loader',
            ],
            
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            
       },
       {
            test: /\.svg$/,
            type: 'asset/resource',
            generator: {
            filename: path.join('icons', '[name][ext]'),
         },
       },
        
    ]
},
optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },

}