import { cn } from 'shared/lib/cn/cn'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = ({
  className
}: NavbarProps) => {
  return (
      <div className={cn(cls.Navbar, {}, [className])}>
          <div>
              <Button theme={ButtonTheme.OUTLINED} >qweqwe</Button>
          </div>
          <div className={cn(cls.links)}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} >main</AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} >About</AppLink>
          </div>
      </div>
  )
}
