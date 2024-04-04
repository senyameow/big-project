import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      options.paths.src, 'node_modules',
    ],
    mainFiles: ['index'],
    alias: {},
    preferAbsolute: true
  }
}
