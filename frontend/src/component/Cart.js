import React from 'react'
import Navbar from './Navbar';
import "./style.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Cart = () => {
  const cart = useSelector((state) => state.cart)
    return (
        <div >
        <Navbar/>
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                    { cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your Cart Empty</p>
                               <div className="start-shoping">
                                  <Link to="/">
                                       <ArrowBackIcon />
                                      <span>Start Shoping</span>
                                  </Link>
                               </div>
                        </div>

                    ):(<div>
                        <div className="title">
                          <h3 className="cart-product-title">Product</h3>    
                          <h3 className="cart-product-price">Price</h3>
                          <h3 className="cart-product-quantity">Quantity</h3>
                          <h3 className="cart-product-total">Total</h3>                       
                        </div>
                        <div className="cart-items">
                            {cart.cartItems?.map(cartItems => (
                                <div cartItems="cart-item" key= {cartItems.id}>
                                    <div className="cart-item-image">
                                        <img src={cartItems.image} alt={cartItems.name} />
                                           <div>
                                               <h3>{cartItems.name}</h3>
                                               <p>{cartItems.desc}</p>
                                               <button>Remove</button>
                                           </div>
                                    </div>
                                   <div className="cart-item-product-price">${cartItems.price}</div>
                                   <div className="cart-item-quantity">
                                       <button> - </button>
                                       <div className="count">{cartItems.cartQuantity}</div>
                                       <button> + </button>
                                   </div>
                                   <div className="cart-product-total-price">
                                       ${cartItems.price * cartItems.cartQuantity}
                                   </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                           <button className="clear-cart"></button>
                           <div className="cart-checkout">
                               <div className="subtotal">
                                  <span className="amount">${cart.cartTotalAmount}</span>
                               </div>
                               <p>Taxex and Shiping calculated in checkout</p>
                               <button>Checkput</button>
                                 <div className="continew-shoping">
                                 <Link to= "/">
                                       <ArrowBackIcon/>
                                </Link>
                                <span>Continue Shoping</span>
                                 </div>
                           </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Cart;
