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
							pretty: false
						}
					}					
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						{
							loader: 'css-loader', 
							options: {minimize: true}
						},
							'sass-loader']
				})				
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/img/[name].[ext]'
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
							name: '[name].[ext]',
							outputPath: 'assets/fonts/'
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
	],
	resolve: {
		alias: {
			images: path.resolve(__dirname, 'src/img/'),
			js: path.resolve(__dirname, 'src/js/'),
			templates: path.resolve(__dirname, 'src/templates/'),
			modules: path.resolve(__dirname, 'node_modules'),
			cssIncludes: path.resolve(__dirname, 'src/css/includes'),
			fonts: path.resolve(__dirname, 'src/assets/thirdparty/fonts/')
		}
	}
};