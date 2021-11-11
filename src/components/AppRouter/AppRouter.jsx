import React from "react"
import { Redirect, Route, Switch } from "react-router"
import { privateRoutes, publicRoutes } from "./routes"

const AppRouter = () => {

  const isAuthenticated = () => {
    return localStorage.getItem('token' !== null)
  }

  return (
    isAuthenticated
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
            key={route.path} />
        )}
        <Redirect to='/auth' />
      </Switch>
  )
}

export default AppRouter
