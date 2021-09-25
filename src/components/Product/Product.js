import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const{name,seller,price,img,stock,star} = props.items;
    const addToCart = props.handleAddToCart;
    return (
        <div className="products-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <p><small>by : {seller}</small></p>
                <h3>Price: {price}</h3>
                <Rating
                className="rating"
                initialRating = {star}
                emptySymbol= "far fa-star"
                fullSymbol = "fas fa-star"
                readonly
                >
                </Rating>
                <p><small> only {stock} left in stock - order soon</small></p>
                <button  onClick={()=>addToCart(props.items)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div>Add To Cart</div></button>
            </div> 
        </div>
    );
};

export default Product;