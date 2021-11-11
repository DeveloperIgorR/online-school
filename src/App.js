import React,{ useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter/AppRouter"
import { AppContext } from "./context/context"

function App() {
const[isAuth,setIsAuth] = useState(false)
const [user,setUser] = useState(null)

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  )

}

export default App
