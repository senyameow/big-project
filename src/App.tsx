import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageChunk } from './pages/AboutPage/AboutPage.async'
import { MainPageChunk } from './pages/MainPage/MainPage.async'
import { Suspense, useState } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {

    const [theme, setTheme] = useState<Theme>(Theme.DARK)

    return (

        <div className={`app ${theme}`}>
            <div className='links'>
                <Link to={'/'}>main page</Link>
                <Link to={'/about'}>about page</Link>
            </div>
            <Routes>
                <Route path={'/about'} element={<Suspense fallback={<div>LOADING ABOUT...</div>}><AboutPageChunk /></Suspense>} />
                <Route path={'/'} element={<Suspense fallback={<div>LOADING MAIN...</div>}><MainPageChunk /></Suspense>} />
            </Routes>
        </div>

    )
}

export default App