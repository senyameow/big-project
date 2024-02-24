type Mods = Record<string, string | boolean>


export const cn = (cls: string, mods: Mods, additional: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(e => e[0])
    ]
        .join(' ')
}