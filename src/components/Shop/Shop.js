import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //For Products
    const [products,setProducts] = useState([])
    //For Cart
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="main-shop">
            <div className="shop-container">
                {
                    products.map(product => <Product 
                    key={product.key}
                    items={product}
                    handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h3>Items Order :{cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;