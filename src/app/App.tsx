import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (

        <div className={`app ${theme}`}>
            <div>
                <button onClick={toggleTheme}>toggle</button>
            </div>
            <Link to={'/'}>main page</Link>
            <Link to={'/about'}>about page</Link>
            <Routes>
                <Route path={'/about'} element={<Suspense fallback={<div>LOADING ABOUT...</div>}><AboutPage /></Suspense>} />
                <Route path={'/'} element={<Suspense fallback={<div>LOADING MAIN...</div>}><MainPage /></Suspense>} />
            </Routes>
        </div>

    )
}

export default App