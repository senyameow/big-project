import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, Paths } from "./config/build/types/config";


export default (env: BuildEnv) => {

    const paths: Paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build')
    }

    const mode = env.mode || 'development'
    const port = env.port || 1234

    return buildWebpackConfig({ mode, paths, port })
}