const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "url-loader",
                options: {
                    name: "./fonts/[name].[ext]",
                    publicPath: "../"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "./fonts/[name].[ext]",
                    publicPath: "../"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.devtool = "source-map";
    }
    return config;
};