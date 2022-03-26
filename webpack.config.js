const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const assetBuildFolder = path.resolve(__dirname,'./dist');

const isDevelopmentMode = process.env.NODE_ENV === 'development';

module.exports = {
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
            filename: 'index.html', // output file            
            minify: !isDevelopmentMode?  {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }: false
		}),
		new MiniCssExtractPlugin({			
            filename:  "css/[name].css",
            chunkFilename: "css/[id].css",
        })              
	],
	mode: isDevelopmentMode ? "development" : "production",
	module: {
		rules: [
			{
				test: /\.(sass|scss|css)$/i,
				use: [isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
			},			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			}
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".tsx", ".ts", ".scss", ".css"],
	},
	entry: {
		main: path.resolve(__dirname, './src/index'),
	},
	output: {
        path: path.resolve(__dirname, assetBuildFolder),
        filename: 'js/[name]-[chunkhash].js',
	},
    devServer:  {               
        liveReload: true,        
        compress: true,
        open:true,
        client: {
            overlay: true,
            progress: true,
            logging: 'none',            
        },
        devMiddleware: {
            index: true,
            // mimeTypes: { phtml: 'text/html' },
            serverSideRender: true,
            //writeToDisk: true,
        },
       
    },
};
