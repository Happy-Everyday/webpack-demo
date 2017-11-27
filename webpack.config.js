const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //html自动引入script
const CleanWebpackPlugin = require('clean-webpack-plugin') //打包之前清空文件夹


module.exports = {
	entry: {
		a: './app.js',
		b: './app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './static/js/[name].[chunkhash].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin()
	],
	module: {
		loaders: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
}