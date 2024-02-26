import { cn } from 'shared/lib/cn/cn'
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

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
            sidebar
            <button onClick={onToggle}>qwe</button>
        </div>
    )
}