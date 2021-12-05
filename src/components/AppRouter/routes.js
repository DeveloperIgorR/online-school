import Modules from "../../pages/Modules/Modules"
import Authorization from "../../pages/Authorization/Authorization"
import Dashboard from "../../pages/Dashboard/Dashboard"
import Theory from "../../pages/Theory/Theory"
import Tasks from "../../pages/Tasks/Tasks"

export const privateRoutes = [
    {path: '/', component: Dashboard, exact:true},
    {path: '/modules', component: Modules, exact:true}, 
    {path: '/tasks', component: Tasks, exact:true},
    {path: '/theory', component: Theory, exact:true},
    {path: '/checklists', component: Checklists, exact:true},
]

export const publicRoutes = [
    {path: '/auth', component: Authorization, exact:true}
]