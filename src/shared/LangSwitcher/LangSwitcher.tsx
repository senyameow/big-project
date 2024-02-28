import { cn } from 'shared/lib/cn/cn'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;

}

export const LangSwitcher = ({
    className,
}: LangSwitcherProps) => {

    const { i18n, t } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={cn(cls.LangSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>{t('Язык')}</Button>
    )
}