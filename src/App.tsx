import './index.scss'
import { Route, Router, Routes, Link } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import './index.scss'

const App = () => {
    return (

        <div className='app'>
            <div className='links'>
                <Link to={'/'}>main page</Link>
                <Link to={'/about'}>about page</Link>
            </div>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>

    )
}

export default App