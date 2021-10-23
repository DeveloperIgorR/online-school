import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./context/context";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <AppContext.Provider>
      <BrowserRouter>
       
      </BrowserRouter>
    </AppContext.Provider>
  )
  
}

export default App
