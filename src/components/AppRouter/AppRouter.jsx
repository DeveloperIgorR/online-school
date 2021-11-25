import React from "react"
import { Redirect, Route, Switch } from "react-router"
import { useContext } from "react/cjs/react.development"
import { AppContext } from "../../context/context"
import { privateRoutes, publicRoutes } from "./routes"

const AppRouter = () => {

  const {isAuth, setIsAuth} = useContext(AppContext)
  
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null
  }
  
  return (
    isAuth || isAuthenticated()
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
        <Redirect to='/user/users' />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
        <Redirect to='/auth' />
      </Switch>
  )
}

export default AppRouter
