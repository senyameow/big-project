import { cn } from 'shared/lib/cn/cn'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string;
    
}

export const PageError = ({
    className,
}: PageErrorProps) => {
    const { t } = useTranslation()
    const onRefresh = () => {
        location.reload()
    }

    return (
        <div className={cn(cls.PageError, {}, [className])}>
            <p>{t('Произошла ошибка. Обновите страницу')}</p>
            <Button theme={ButtonTheme.CLEAR} onClick={onRefresh}>{t('Обновить')}</Button>
        </div>
    )
}
