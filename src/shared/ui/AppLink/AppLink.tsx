import { cn } from 'shared/lib/cn/cn'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
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
