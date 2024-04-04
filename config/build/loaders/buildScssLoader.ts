import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { Mode } from "../types/config"
import path from "path"

export const buildSaasLoader = (mode: Mode) => {
  return {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
 }
}