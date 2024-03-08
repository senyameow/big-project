import { cn } from 'shared/lib/cn/cn'
import './PageLoader.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({
    className,
}: PageLoaderProps) => {
    return (
        <div className={cn('PageLoader', {}, [className])}>
            <Loader />
        </div>
    )
}
