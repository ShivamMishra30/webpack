var path = require('path')
var TerserPlugin = require('terser-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader' 
                ]
            },
            // Before styles where resolved using loader which inject styles in index.html but with plugin it will create style.css and import it in index.html
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', 'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            // {
            //     text: /\.(hbs | pug)$/,
            //     use: [
            //         'handlebars-loader'
            //     ]
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                    }
                }
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css'}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            // template: 'file path' use templating engine for template
            description: 'Some Description'
            
        })
    ]
}