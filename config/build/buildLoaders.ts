import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildSaasLoader } from './loaders/buildScssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  // порядок, в котором лоадеры указаны в массиве ИМЕЕТ ЗНАЧЕНИЕ
  // лучше выносить их в отдельные переменные

  const tsLoader = {
    // файлы, которые надо пропустить через этот лоадер
    test: /\.tsx?$/, // обрабатывает файлы как ts так и tsx (регулярка их ловит)
    // loader, который позволяет работать tsу
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  
  const babelLoader = buildBabelLoader()
  const sassLoader = buildSaasLoader(options.mode)

  return [
    babelLoader,
    tsLoader,
    sassLoader,
    fileLoader,
    svgLoader,
  ]
}
