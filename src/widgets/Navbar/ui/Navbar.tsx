import { cn } from "shared/lib/cn/cn"
import cls from './Navbar.module.scss'
import { Link } from "react-router-dom";

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
                <Link to={'/'} >main</Link>
                <Link to={'/about'} >About</Link>
            </div>
        </div>
    )
}
