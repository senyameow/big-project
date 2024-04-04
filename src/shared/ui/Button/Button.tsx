import { cn } from 'shared/lib/cn/cn'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'
import React from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...rest
}) => {
  return (
      <button {...rest} className={cn(cls.Button, {}, [className, cls[theme]])}>
          {children}
      </button>
  )
}
