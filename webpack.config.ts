import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { buildPlugins } from './config/build/buildPlugins'

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
        rules: [
            {
                // файлы, которые надо пропустить через этот лоадер
                test: /\.tsx?$/, // обрабатывает файлы как ts так и tsx (регулярка их ловит)
                // loader, который позволяет работать tsу
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}

export default config