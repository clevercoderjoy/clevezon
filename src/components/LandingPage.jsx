import React from 'react';
import { Link } from "react-router-dom";

import landingPage from "../styles/landingPage.css";
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
import brandLogoNautica from "../assets/images/brandLogoNautica.jpg";
import brandLogoUSP from "../assets/images/brandLogoUSP.jpg";
import categoryMen from "../assets/images/categoryMen.png";
import categoryKids from "../assets/images/categoryKids.png";
import categoryWomen from "../assets/images/categoryWomen.avif";

function LandingPage() {
    return (
        <>
            <section className="hero">
                <Link to="/productListingPage">
                    <img src={heroMobile} alt="50% OFF" className="hero-img mobile" />
                </Link>
                <img src={heroTablet} alt="50% OFF" className="hero-img tablet" />
                <img src={heroDesktop} alt="50% OFF" className="hero-img desktop" />
            </section>
            <section className="brands">
                <h2 className="brands-heading">FEATURED BRANDS</h2>
                <div className="brand-images">
                    <img src={brandLogoBiba} alt="biba brand Logo" className="brand-img" />
                    <img src={brandLogoCC} alt="cherry crumble brand Logo" className="brand-img" />
                    <img src={brandLogoHnM} alt="H&M brand Logo" className="brand-img" />
                    <img src={brandLogoNautica} alt="Nautica brand Logo" className="brand-img" />
                    <img src={brandLogoLP} alt="L&P brand Logo" className="brand-img" />
                    <img src={brandLogoLevis} alt="Levi's brand Logo" className="brand-img" />
                    <img src={brandLogoMnH} alt="M&N brand Logo" className="brand-img" />
                    <img src={brandLogoRoadster} alt="Roadster brand Logo" className="brand-img" />
                    <img src={brandLogoUSP} alt="USP brand Logo" className="brand-img" />
                </div>
            </section>
            <section className="categories">
                <h2 className="category-heading">Shop by Category</h2>
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

        </>
    )
}

export default LandingPage