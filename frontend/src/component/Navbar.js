import React from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import "./style.css"

const Navbar = () => {
    return (
        <div className="nav-main">
            <div className="nav-text">
            <LocalMallIcon/>
             <h1>Shoping Cart</h1>

            </div>

            <div className="nav-cart">
               <Link to="/cart"><h1>Cart <span className="num">5</span></h1></Link>
            </div>
        </div>
    )
}

export default Navbar;
