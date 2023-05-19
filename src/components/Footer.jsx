import React from 'react';
import { Link } from "react-router-dom";

import clevercoderjoy from "../assets/images/clevercoderjoy.jpeg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="socials">
                    <a href="https://clevercoderjoy.bio.link/" target="_blank">
                        <img src={clevercoderjoy} alt="" />
                    </a>
                </div>
                <div className="footer-headings">
                    <h3 className="footer-heading">clevezon</h3>
                    <p className="footer-desc">The essence of clever fashion.</p>
                </div>
                <div className="quick-links">
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
                <p className="copyright">
                    Copyright ©2023 All rights reserved | Built by <Link to="https://clevercoderjoy.bio.link" target="_blank">clevercoderjoy {"{...}"}</Link></p>
            </footer>
        </>
    )
}

export default Footer