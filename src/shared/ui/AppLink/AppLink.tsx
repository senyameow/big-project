import { cn } from 'shared/lib/cn/cn'
import cls from './AppLink.module.scss'
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
}) => {
    return (
        <Link {...rest} to={to} className={cn(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}