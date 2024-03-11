import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'

const App = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (Math.random() < 0.5) throw new Error()
  })

  return (
      <div className={`app ${theme}`}>
          <Suspense fallback={<PageLoader />}>
              <Navbar />
              <div className='content'>
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
