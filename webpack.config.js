const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        publicPath: "./",
        path: path.resolve(__dirname, "build"),
        filename: "js/bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        // compress: true,
        port: 9000,
        open: false,

        devMiddleware: {
            writeToDisk: true,
            stats: "errors-only",
        },
        hot: false,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images",
                        },
                    },
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts",
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/contactUs.html",
            filename: "contactUs.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pizza-1.html",
            filename: "pizza-1.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pizza-2.html",
            filename: "pizza-2.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pizza-3.html",
            filename: "pizza-3.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
