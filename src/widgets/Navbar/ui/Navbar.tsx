import { cn } from "shared/lib/cn/cn"
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string; // извне доп класс, например, если захотим с какого-то другого компонента поправить что-то (пэдинги, маржины)

}

export const Navbar = ({

    className,

}: NavbarProps) => {
    return (
        <div className={cn(cls.navbar, {}, [className])}>
            <p>I wanna scream and shout</p>
        </div>
    )
}
