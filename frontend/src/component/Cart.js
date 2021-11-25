
import React from 'react'
import Navbar from './Navbar';
import "./cart.css"
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { addToCart, clearCart, getTotal, removeFromCart } from '../features/cartSlice';
import { decreaseCart } from '../features/cartSlice';



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() =>{
       dispatch(getTotal())
  },[cart,dispatch]);

const handleRemoveFromCart = (cartItems) => {
     dispatch(removeFromCart(cartItems));
}
const handleDecreaseCart = (cartItems) => {
    dispatch(decreaseCart(cartItems));
}
const handleIncreaseCart = (cartItems) => {
     dispatch(addToCart(cartItems))
}
const handleIClearCart = () => {
    dispatch(clearCart());
}

    return (
        <div >
        <Navbar/>
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                    { cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your Cart Is Currently Empty</p>
                               <div className="start-shopping">
                                  <Link to="/">
                                       <ArrowBackIcon />
                                      <span>Start Shoping</span>
                                  </Link>
                               </div>
                        </div>

                    ):(
                       <div>
                        <div className="titles">
                          <h3 className="product-title">Product</h3>    
                          <h3 className="price">Price</h3>
                          <h3 className="quantity">Quantity</h3>
                          <h3 className="total">Total</h3>                       
                        </div>
                        <div className="cart-items">
                            {cart.cartItems && 
                               cart.cartItems.map((cartItems) => (
                                <div className="cart-item" key= {cartItems.id}>
                                    <div className="cart-product">
                                        <img src={cartItems.image} alt={cartItems.name} />
                                           <div>
                                               <h3>{cartItems.name}</h3>
                                               <p>{cartItems.desc}</p>
                                               <button onClick={()=> handleRemoveFromCart(cartItems)}>Remove</button>
                                           </div>
                                    </div>
                                   <div className="cart-product-price">${cartItems.price}</div>
                                   <div className="cart-product-quantity">
                                       <button onClick={()=> handleDecreaseCart(cartItems)}> - </button>
                                       <div className="count">{cartItems.cartQuantity}</div>
                                       <button onClick={() => handleIncreaseCart(cartItems)}> + </button>
                                   </div>
                                   <div className="cart-product-total-price">
                                       ${cartItems.price * cartItems.cartQuantity}
                                   </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                           <button className="clear-btn" onClick={() => handleIClearCart()}> Clear Cart</button>
                           <div className="cart-checkout">
                               <div className="subtotal">
                                  <span className="amount">${cart.cartTotalAmount}</span>
                               </div>
                               <p>Taxex and Shiping calculated in checkout</p>
                               <button>Checkput</button>
                                 <div className="continue-shoping">
                                 <Link to= "/">
                                       <ArrowBackIcon/>
                                       <span>Continue Shoping</span>
                                </Link>
                                
                                 </div>
                           </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Cart;
