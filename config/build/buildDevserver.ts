import { type BuildOptions } from './types/config'
import { type Configuration as DevServerConfig } from 'webpack-dev-server'

export const buildDevserver = (options: BuildOptions): DevServerConfig => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
