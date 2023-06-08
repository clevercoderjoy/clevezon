import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import header from "../styles/header.css";
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import Cart from './Cart';
import WishList from './WishList';
import iconSearch from "../assets/images/iconsSearch.gif";
import iconWishList from "../assets/images/iconsWishList.gif";
import iconCart from "../assets/images/iconsCart.gif";
import iconLogin from "../assets/images/iconLogin.gif";
import iconHome from "../assets/images/iconsHome.gif";
import SignUp from './SignUp';
import Login from './Login';
import ProductCard from './ProductCard';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        <NavLink to="/"><h1>clevezon</h1></NavLink>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="🔍Search..." />
                    </div>
                    <div className="navigation">
                        <nav>
                            <NavLink to="/" title="Home">
                                <img src={iconHome} alt="search-icon" />
                            </NavLink>
                            <NavLink to="/productListingPage" title="Go Shopping">
                                <img src={iconSearch} alt="search-icon" />
                            </NavLink>
                            <NavLink to="/wishList" title="WishList">
                                <img src={iconWishList} alt="wishList-icon" />
                                <span className="wishList-count">1</span>
                            </NavLink>
                            <NavLink to="/cart" title="My Cart">
                                <img src={iconCart} alt="icon-cart" />
                                <span className="cart-count">1</span>
                            </NavLink>
                            <NavLink to="/login" title="Sign-Up/Login">
                                <img src={iconLogin} alt="icon-signUp/login" />
                            </NavLink>
                        </nav>
                    </div>
                </div>
                <hr />
            </header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/productListingPage" element={<ProductListingPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productCard/:productId" element={<ProductCard />} />
            </Routes>
        </>
    )
}

export default Header