import React,{ useEffect, useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter/AppRouter"
import { AppContext } from "./context/context"
import { instance } from './services/instance'

function App() {
const[isAuth,setIsAuth] = useState(false)
const [user,setUser] = useState(null)

// useEffect(() => {
//   authorizing()
//    },[])

// async function authorizing(){
//  try{
//  const response = await instance.get(`/authorizing`)    
//    setIsAuth(true)
//    setUser(response.data.user)
//  } catch (e) {
//      console.log(e)
//  }
// }

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
