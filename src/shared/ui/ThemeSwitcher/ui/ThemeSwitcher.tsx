import { cn } from 'shared/lib/cn/cn'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import Light from 'shared/assets/icons/theme-light.svg'
import Dark from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import React from 'react'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = ({
  className
}: ThemeSwitcherProps) => {
  //
  const { theme, toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme} className={cn(cls.ThemeSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} >{theme === Theme.DARK ? <Light /> : <Dark />}</Button>
  )
}
