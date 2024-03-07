import { cn } from 'shared/lib/cn/cn'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string;

}

export const NotFoundPage = ({
    className,
}: NotFoundPageProps) => {
    return (
        <div className={cn(cls.NotFoundPage, {}, [className])}>
            Not Found
        </div>
    )
}