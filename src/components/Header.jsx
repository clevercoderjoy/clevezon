import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import header from "../styles/header.css";
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import Cart from './Cart';
import WishList from './WishList';
import AuthPage from './AuthPage';
import iconSearch from "../assets/images/iconsSearch.gif";
import iconWishList from "../assets/images/iconsWishList.gif";
import iconCart from "../assets/images/iconsCart.gif";
import iconLogin from "../assets/images/iconLogin.gif";

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <NavLink to="/"><h1>clevezon</h1></NavLink>
                </div>
                <div className="search">
                    <input type="text" placeholder="🔍Search..." />
                </div>
                <div className="navigation">
                    <nav>
                        <NavLink to="/productListingPage" title="Go Shopping">
                            <img src={iconSearch} alt="search-icon" />
                        </NavLink>
                        <NavLink to="/wishList" title="WishList">
                            <img src={iconWishList} alt="wishList-icon" />
                        </NavLink>
                        <NavLink to="/cart" title="My Cart">
                            <img src={iconCart} alt="icon-cart" />
                        </NavLink>
                        <NavLink to="/authPage" title="Sign-Up/Login">
                            <img src={iconLogin} alt="icon-signUp/login" />
                        </NavLink>
                    </nav>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/productListingPage" element={<ProductListingPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishList" element={<WishList />} />
                        <Route path="/authPage" element={<AuthPage />} />
                    </Routes>
                </div>
            </header>
        </>
    )
}

export default Header