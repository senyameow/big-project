import { cn } from 'shared/lib/cn/cn'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;

}

export const ThemeSwitcher = ({
    className,
}: ThemeSwitcherProps) => {
    // 
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className={cn(cls.ThemeSwitcher, {}, [className])}>toggle</button>
    )
}