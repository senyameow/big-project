import { RuleSetRule } from 'webpack'
export const buildLoaders = (): RuleSetRule[] => {
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
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        tsLoader,
        sassLoader,
    ]
}