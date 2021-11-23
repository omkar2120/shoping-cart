import React from 'react'
import { productsApi, useGetAllProductsQuery }  from '../features/productsApi';
import Navbar from './Navbar'
import { useDispatch , useSelector} from 'react-redux';
import "./style.css"
import { addToCart } from '../features/cartSlice';

const Home = () => {
    const  { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();

    const handleAddToCart = (products) => {
        dispatch(addToCart(products));
    }
    return (
        <div>
                <Navbar />

            <div className="home-container">
                {isLoading ? (
                    <p>Loading...</p>
                ) : error  ? (
                    <p>An error occured...</p>
                ) : (
                    <>
                       <h2>New Arrivals</h2>
                       <div className="products">
                           {data?.map((products) => (
                               <div key={products.id} className="product">
                                   <h3>{products.name}</h3>
                                      <img src={products.image} alt={products.name} />
                                         <div className="details">
                                             <span>{products.desc}</span>
                                              <span className="price">₹{products.price}</span>
                                         </div>
                                         <button onClick={() => handleAddToCart(products)}>Add To Cart</button>   

                               </div>
                           ))}
                       </div>
                    </>
                )}
            </div>
       </div>
    )
}

export default Home;
