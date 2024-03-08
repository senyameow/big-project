import { cn } from 'shared/lib/cn/cn'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string

}

export const NotFoundPage = ({
    className
}: NotFoundPageProps) => {
    const { t } = useTranslation()
    return (
        <div className={cn(cls.NotFoundPage, {}, [className])}>
            {t('страница не найдена')}
        </div>
    )
}