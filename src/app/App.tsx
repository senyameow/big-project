import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (

        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>main page</Link>
            <Link to={'/about'}>about page</Link>
            <AppRouter />
        </div>

    )
}

export default App