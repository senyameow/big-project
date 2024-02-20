import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageChunk } from './pages/AboutPage/AboutPage.async'
import { MainPageChunk } from './pages/MainPage/MainPage.async'
import { Suspense, useContext } from 'react'
import { ThemeContext } from './theme/ThemeContext'

const App = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (

        <div className={`app ${theme}`}>
            <Link to={'/'}>main page</Link>
            <Link to={'/about'}>about page</Link>
            <Routes>
                <Route path={'/about'} element={<Suspense fallback={<div>LOADING ABOUT...</div>}><AboutPageChunk /></Suspense>} />
                <Route path={'/'} element={<Suspense fallback={<div>LOADING MAIN...</div>}><MainPageChunk /></Suspense>} />
            </Routes>
        </div>

    )
}

export default App