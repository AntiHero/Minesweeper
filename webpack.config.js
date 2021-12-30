const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};

module.exports = config;
