import { useContext } from "react"
import { Redirect, Route, Switch } from "react-router"
import { AppContext } from "../../context/context"
import { privateRoutes, publicRoutes } from "./routes"

const AppRouter = () => {
    const {isAuth,setIsAuth} = useContext(AppContext)
    return (
        isAuth
        ?
        <Switch>
          {privateRoutes.map(route =>
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path} />
          )}
          <Redirect to='/' />
        </Switch>   
         :
        <Switch>
          {publicRoutes.map(route =>
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}/>
          )}
          <Redirect to='/auth' />
        </Switch>
    )
}

export default AppRouter
