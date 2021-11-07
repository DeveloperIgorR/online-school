import React,{ useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter/AppRouter"
import { AppContext } from "./context/context"

function App() {
const[isAuth,setIsAuth] = useState(true)

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  )

}

export default App
