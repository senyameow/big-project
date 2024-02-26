import { cn } from 'shared/lib/cn/cn'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Light from 'shared/assets/icons/theme-light.svg'
import Dark from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
    className?: string;

}

export const ThemeSwitcher = ({
    className,
}: ThemeSwitcherProps) => {

    // 
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className={cn(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <Light /> : <Dark />}
        </button>
    )
}