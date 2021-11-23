import React from 'react'
import { BrowserRouter , Route  } from 'react-router-dom'
import {Switch} from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './component/Home'
import Cart from './component/Cart'


const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Switch>
          <Route exact path="/"component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          </Switch>
        
       
     </BrowserRouter>
      
    </div>
  )
}

export default App
