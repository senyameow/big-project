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

    return [
        tsLoader,
    ]
}