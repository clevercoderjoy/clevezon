import React from 'react';

import heroMobile from "../assets/images/heroMobile.jpg";
import heroTablet from "../assets/images/heroTablet.jpg";
import heroDesktop from "../assets/images/heroDesktop.jpg";
import brandLogoLevis from "../assets/images/brandLogoLevis.png";
import brandLogoBiba from "../assets/images/brandLogoBiba.jpg";
import brandLogoCC from "../assets/images/brandLogoCC.png";
import brandLogoHnM from "../assets/images/brandLogoHnM.jpg";
import brandLogoLP from "../assets/images/brandLogoLP.png";
import brandLogoMnH from "../assets/images/brandLogoMnH.png";
import brandLogoRoadster from "../assets/images/brandLogoRoadster.jpg";
import brandLogoUSP from "../assets/images/brandLogoUSP.jpg";
import categoryMen from "../assets/images/categoryMen.png";
import categoryKids from "../assets/images/categoryKids.png";
import categoryWomen from "../assets/images/categoryWomen.avif";
import clevercoderjoy from "../assets/images/clevercoderjoy.jpeg"

function LandingPage() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <h1>clevezon</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>Explore</li>
                            <li>sign up/login</li>
                            <li>wishlist</li>
                            <li>cart</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero">
                <img src={heroMobile} alt="50% OFF" className="hero-img" />
                <img src={heroTablet} alt="50% OFF" className="hero-img" />
                <img src={heroDesktop} alt="50% OFF" className="hero-img" />
            </section>
            <section className="brands">
                <h2 className="brands">BRANDS</h2>
                <div className="brand-images">
                    <img src={brandLogoBiba} alt="biba brand Logo" className="brand-img" />
                    <img src={brandLogoCC} alt="cherry crumble brand Logo" className="brand-img" />
                    <img src={brandLogoHnM} alt="H&M brand Logo" className="brand-img" />
                    <img src={brandLogoLP} alt="L&P brand Logo" className="brand-img" />
                    <img src={brandLogoLevis} alt="Levi's brand Logo" className="brand-img" />
                    <img src={brandLogoMnH} alt="M&N brand Logo" className="brand-img" />
                    <img src={brandLogoRoadster} alt="Roadster brand Logo" className="brand-img" />
                    <img src={brandLogoUSP} alt="USP brand Logo" className="brand-img" />
                </div>
            </section>
            <section className="categories">
                <div className="category">
                    <img src={categoryMen} alt="category: men" className="men" />
                    <button className="category-btn">Shop for Men</button>
                </div>
                <div className="category">
                    <img src={categoryKids} alt="category: kids" className="kids" />
                    <button className="category-btn">Shop for Kids</button>
                </div>
                <div className="category">
                    <img src={categoryWomen} alt="category: women" className="women" />
                    <button className="category-btn">Shop for Women</button>
                </div>
            </section>
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
                    Copyright ©2023 All rights reserved | Built by clevercoderjoy "{"{...}"}"</p>
            </footer>
        </>
    )
}

export default LandingPage