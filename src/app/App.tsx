import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {

    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <div className='content'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App