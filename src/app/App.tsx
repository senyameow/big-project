import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {

    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App