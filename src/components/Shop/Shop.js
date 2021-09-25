import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                console.log(addedProduct,key);
            }
        }
    },[products])
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
        
    }

    return (
        <>
        <div className="search-field">
            <input type="text" placeholder="search your product"/>
        </div>
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
            <Cart cart={cart}></Cart>
        </div>
        </div>
        
        </>

    );
};

export default Shop;