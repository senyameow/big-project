import HtmlWebpackPlugin from "html-webpack-plugin"
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({ paths, mode }: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            PRODUCTION: JSON.stringify(mode === 'production' ? true : false)
        })
    ]
}