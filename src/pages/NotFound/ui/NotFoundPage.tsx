import { cn } from 'shared/lib/cn/cn'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { PageLoader } from 'widgets/PageLoader'


interface NotFoundPageProps {
    className?: string

}

export const NotFoundPage = ({
    className
}: NotFoundPageProps) => {
    const { t } = useTranslation()
    return (
        <div className={cn(cls.NotFoundPage, {}, [className])}>
            <PageLoader />
        </div>
    )
}
