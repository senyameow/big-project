import './index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import './index.scss'
import { AboutPageChunk } from './pages/AboutPage/AboutPage.async'
import { MainPageChunk } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'

const App = () => {
    return (

        <div className='app'>
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