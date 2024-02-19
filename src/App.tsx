import './index.scss'
import { Route, Router, Routes, Link } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import './index.scss'

const App = () => {
    return (

        <div className='app'>
            qwe
            <Link to={'/'} />
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>

    )
}

export default App