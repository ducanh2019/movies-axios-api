import Home from "../pages/Home";
import Detail from "../pages/detail/Detail";
import Catalog from "../pages/Catalog";

const publicRoutes = [
    { pathName: '/:category/search/:keyword', component: Catalog },
    { pathName: '/:category/:id', component: Detail },
    { pathName: '/:category', component: Catalog },
    { pathName: '/', component: Home }
]

const privateRoutes = []

export {publicRoutes, privateRoutes}