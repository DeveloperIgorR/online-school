// import Dashboard from "../../pages/Dashboard/Dashboard"
import Modules from "../../pages/Modules/Modules"
import Authorization from "../../pages/Authorization/Authorization"

export const privateRoutes = [
    // {path: '/', component: Dashboard, exact:true},
    {path: '/modules', component: Modules, exact:true},    
]

export const publicRoutes = [
    {path: '/auth', component: Authorization, exact:true},
]