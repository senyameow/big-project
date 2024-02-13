
export type Mode = 'development' | 'production'

export interface Paths {
    entry: string;
    html: string;
    build: string;
}

export interface BuildOptions {
    mode: Mode
    paths: Paths
}