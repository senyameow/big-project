import './index.scss'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import './index.scss'

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'} >Main page</Link>
            <Link to={'/about'} >About page</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default App