import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { Paths } from "./config/build/types/config";

const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
}

export default buildWebpackConfig({ mode: 'development', paths })