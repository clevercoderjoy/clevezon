import React from 'react';
import { NavLink, Link } from "react-router-dom";

import footer from "../styles/footer.css";
import iconSearch from "../assets/images/iconsSearch.gif";
import iconWishList from "../assets/images/iconsWishList.gif";
import iconCart from "../assets/images/iconsCart.gif";
import iconLogin from "../assets/images/iconLogin.gif";
import iconHome from "../assets/images/iconsHome.gif";
import clevercoderjoy from "../assets/images/clevercoderjoy.jpeg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-headings">
                    <h3 className="footer-heading">clevezon</h3>
                    <p className="heading-desc">The zone of clever fashion sense.</p>
                </div>
                <div className="quick-links">
                    <h3 className="footer-heading">Quick Links</h3>
                    <nav>
                        <nav>
                            <NavLink to="/" title="Home">
                                <img src={iconHome} alt="search-icon" />
                            </NavLink>
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
                    </nav>
                </div>
                <p className="copyright">Copyright ©2023 All rights reserved</p>
                <div className="container">
                    <p className="built">Built by</p>
                    <Link className="connect" to="https://clevercoderjoy.bio.link" target="_blank">
                        <img src={clevercoderjoy} alt="clevercoderjoy" />
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer