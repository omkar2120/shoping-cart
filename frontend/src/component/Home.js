import React from 'react'
import { productsApi, useGetAllProductsQuery }  from '../features/productsApi';
import Navbar from './Navbar'

const Home = () => {
    const  { data, error, isLoading } = useGetAllProductsQuery();

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
                                   <h3>{productsApi.name}</h3>
                                      <img src={products.image} alt={products.name} />
                                         <div className="details">
                                             <span>{products.desc}</span>
                                              <span className="price">₹{products.price}</span>
                                         </div>
                                         <button>Add To Cart</button>

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
