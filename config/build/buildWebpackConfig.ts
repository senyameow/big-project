import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevserver } from "./buildDevserver";


export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths } = options
    const { entry, build } = paths
    return {
        mode,
        entry,
        output: {
            path: build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            // обработка файлов, которые выходят за рамки js (png, jpg, gif, svg, css, ts... )
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer: buildDevserver(options)
    }
}