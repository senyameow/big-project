import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

// объект, в котором для каждого раута укажем путь до соответствующего компонента
export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

// теперь объявляем сами рауты, i.e. маршрут, компонент

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths.main
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePaths.about
    }
}