import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="main-shop">
            <div className="shop-container">
                {
                    products.map(product => <Product items={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h3>Items Order</h3>
            </div>
        </div>
    );
};

export default Shop;