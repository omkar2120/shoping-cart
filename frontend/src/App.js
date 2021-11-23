import React from 'react'
import { BrowserRouter , Route  } from 'react-router-dom'
import {Switch} from "react-router-dom"
import Home from './component/Home'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div>
     <BrowserRouter>
     <ToastContainer/>
      <Switch>
          <Route exact path="/"component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          </Switch>
        
       
     </BrowserRouter>
      
    </div>
  )
}

export default App
