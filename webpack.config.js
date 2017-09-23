var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
})

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist') //,
		// publicPath: '/dist'
	},
	module: {
	rules: 
		[
			{ 
				test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" 
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader:'pug-loader',
						options: {
							pretty: true
						}
					}					
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader','sass-loader']
				})				
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			}
		]
	},
	
	plugins: [
		extractPlugin,
		//// actual templates
		new HtmlWebpackPlugin({
			template: "src/templates/index.pug",
			favicon: "src/img/ecmascript6.png",
			filename: "index.html"
		}),	
		new HtmlWebpackPlugin({
			template: "src/templates/test.pug",
			favicon: "src/img/ecmascript6.png",
			filename: "test.html"
		})
	]
};