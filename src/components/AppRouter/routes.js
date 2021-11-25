import Dashboard from "../../pages/Dashboard/Dashboard"
import Modules from "../../pages/Modules/Modules"
import Theory from "../../pages/Theory/Theory"
import Tasks from "../../pages/Tasks/Tasks"
import Checklists from "../../pages/Checklists/Checklists"
import Authorization from "../../pages/Authorization/Authorization"

export const privateRoutes = [
    {path: '/user/users', component: Dashboard, exact:true},
    {path: '/user/modules', component: Modules, exact:true},
    {path: '/user/theory', component: Theory, exact:true},
    {path: '/user/tasks', component: Tasks, exact:true},
    {path: '/user/checklists', component: Checklists, exact:true}
]

export const publicRoutes = [
    {path: '/auth', component: Authorization, exact:true}
]