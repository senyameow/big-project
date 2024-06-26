import { cn } from 'shared/lib/cn/cn'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string

}

export const Sidebar = ({
  className
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false) // теперь можно юзать моды -> 2 значения состояния, от него будет зависеть класс
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
      <div data-testid='sidebar' className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <button data-testid='toggle-btn' onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
