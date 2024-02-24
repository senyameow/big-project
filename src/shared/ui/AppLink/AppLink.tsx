import { cn } from 'shared/lib/cn/cn'
import cls from './AppLink.module.scss'
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    ...rest
}) => {
    return (
        <Link {...rest} to={to} className={cn(cls.AppLink, {}, [className])}>
            {children}
        </Link>
    )
}