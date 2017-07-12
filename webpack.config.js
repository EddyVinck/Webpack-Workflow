var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
})

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
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
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					}
				]
			}
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: 'src/img/ecmascript6.png'
		})
	]
};