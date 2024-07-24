const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

console.log('mode: ' + mode);

module.exports = {
    mode: mode,
    entry: {
        index: './src/index.js',
        cart: './src/cart.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({  // Also generate a cart.html
            filename: 'cart.html',
            template: './src/cart.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}