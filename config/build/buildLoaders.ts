import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
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

  const babelLoader = {
    test: /\.(?:js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript'
        ]
      }
    }
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => !!path.includes('.module.'),
            localIdentName: options.mode === 'development' ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
          }

        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [
    babelLoader,
    tsLoader,
    sassLoader,
    fileLoader,
    svgLoader,
  ]
}
