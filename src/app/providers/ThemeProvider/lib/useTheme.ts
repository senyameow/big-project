// вместо того, чтобы везде вызывать useContext, мы переносим всю логику для взятия чего-то из контекста в отдельный хук
// который уже будет возвращать готовые стейты или функции для их изменения

import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface useThemeProps {
    toggleTheme: () => void;
    theme: Theme
}

export const useTheme = (): useThemeProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {

        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme) // когда тему переключаем, сразу сохраняем в локалстор

        setTheme(newTheme)
    }

    return { theme, toggleTheme }
}