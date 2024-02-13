import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"

export const buildPlugins = (): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new ProgressPlugin(),
    ]
}