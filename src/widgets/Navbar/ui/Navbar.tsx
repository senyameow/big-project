import { cn } from "shared/lib/cn/cn"
import cls from './Navbar.module.scss'
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({
    className,
}: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div>
                Navbar
            </div>
            <div className={cn(cls.links)}>
                <AppLink to={'/'} >main</AppLink>
                <AppLink to={'/about'} >About</AppLink>
            </div>
        </div>
    )
}
