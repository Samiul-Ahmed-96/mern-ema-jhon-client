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
    //for Matched products
    const [matchedProducts,setMatchedProducts] = useState([]) 

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setMatchedProducts(data);
        })
        
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
    const handleSearch = (event) =>{
       const searchText =  event.target.value;
       const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
       setMatchedProducts(matchedProducts);
    }

    return (
        <>
        <div className="search-field">
            <input onChange={handleSearch} type="text" placeholder="search your product"/>
        </div>
        <div className="main-shop">
        
        <div className="shop-container">
            {
                matchedProducts.map(product => <Product 
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