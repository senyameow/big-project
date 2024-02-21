import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaulTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK // явное приведение к типу Theme (т.к. стор отдает строку)

const ThemeContextProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaulTheme)

    // будем использовать мемо, чтобы не пересоздавался компонент, пока не изменятся зависимости

    const defaultValue = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider