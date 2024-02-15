import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    // порядок, в котором лоадеры указаны в массиве ИМЕЕТ ЗНАЧЕНИЕ
    // лучше выносить их в отдельные переменные

    const tsLoader = {
        // файлы, которые надо пропустить через этот лоадер
        test: /\.tsx?$/, // обрабатывает файлы как ts так и tsx (регулярка их ловит)
        // loader, который позволяет работать tsу
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    auto: (path: string) => path.includes('.module.') ? true : false,
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        tsLoader,
        sassLoader,
    ]
}