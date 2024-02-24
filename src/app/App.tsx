import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default App