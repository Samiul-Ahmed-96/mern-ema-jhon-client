import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name,price,img,stock} = props.items;
    return (
        <div className="products-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <h3>Available: {stock}</h3>
            </div> 
        </div>
    );
};

export default Product;