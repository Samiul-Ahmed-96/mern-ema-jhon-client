import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name,seller,price,img,stock} = props.items;
    console.log(props.items)
    return (
        <div className="products-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <p><small>by : {seller}</small></p>
                <h3>Price: {price}</h3>
                <p><small> only {stock} left in stock - order soon</small></p>
                <button className="addToCart">Add To Cart</button>
            </div> 
        </div>
    );
};

export default Product;