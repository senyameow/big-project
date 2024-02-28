import { cn } from 'shared/lib/cn/cn'
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string;

}

export const Sidebar = ({
    className,
}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false) // теперь можно юзать моды -> 2 значения состояния, от него будет зависеть класс
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* lang switcher */}
            </div>
        </div>
    )
}