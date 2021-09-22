import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name,catagory} = props.items;
    return (
        <div>
            <h2>name:{name}</h2>
            <h2>name:{catagory}</h2>
        </div>
    );
};

export default Product;