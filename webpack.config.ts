import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { buildPlugins } from './config/build/buildPlugins'
import { buildLoaders } from './config/build/buildLoaders'

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    plugins: buildPlugins(),
    module: {
        // обработка файлов, которые выходят за рамки js (png, jpg, gif, svg, css, ts... )
        rules: buildLoaders()
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}

export default config