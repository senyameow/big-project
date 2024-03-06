type Mods = Record<string, string | boolean>

export const cn = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(e => e[0])
  ]
    .join(' ')
}