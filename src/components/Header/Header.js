import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="nav">
                <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>    
                    <li><a href="/Order-review">Order Review</a></li>    
                    <li><a href="/manage-inventory">Manage Inventory</a></li>    
                </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;