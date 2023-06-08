import React, { useState } from 'react';

import productListingPage from "../styles/productListingPage.css";
import { products } from "../backend/db/products";
import iconArrow from "../assets/images/iconArrow.png";
import iconHeart from "../assets/images/iconsHeart.png";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function ProductListingPage() {
    const [sideBar, setSideBar] = useState(true);
    const [inStock, setInStock] = useState(true);
    const handleFilterSideBar = () => {
        setSideBar(sideBar => !sideBar);
        console.log(sideBar);
    }
    const sideBarStyle = {
        transform: sideBar ? "translateX(-280px)" : "",
        boxShadow: !sideBar ? "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" : "",
    };
    const arrowImgStyle = {
        transform: sideBar ? "rotate(45deg)" : "rotate(225deg)",
        height: sideBar ? "40px" : "",
        width: sideBar ? "40px" : "",
        right: sideBar ? "-46px" : "-55px",
    }
    const sideBarContainerStyle = {
        display: sideBar ? "none" : "block",
    }
    const subHeadingStyle = {
        marginTop: sideBar ? "0" : "3rem",
    }
    return (
        <>
            <div className="product-list-container" >
                <aside className="filters-container" style={sideBarStyle} >
                    <div className="sideBar-container" style={sideBarContainerStyle} >
                        <div className="filter-header">
                            <h2>Filters</h2>
                            <button className="btn">CLEAR</button>
                        </div>
                        <div className="filter-container">
                            <div className="filter-inputs">
                                <div className="range-input">
                                    <label htmlFor="price">Price</label>
                                    <input type="range" id="price" />
                                </div>
                                <div className="category-input">
                                    <h3>Categories</h3>
                                    <div className="inputs">
                                        <div className="input">
                                            <input type="checkbox" id="men" />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="women" />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="kids" />
                                            <label htmlFor="kids">Kids</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="brand-input">
                                    <h3>Brands</h3>
                                    <div className="inputs">
                                        <div className="input">
                                            <input type="checkbox" id="levis" />
                                            <label htmlFor="levis">Levis</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="cc" />
                                            <label htmlFor="cc">Cherry Crumble</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="HnM" />
                                            <label htmlFor="HnM">H&M</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="roadster" />
                                            <label htmlFor="roadster">roadster</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="biba" />
                                            <label htmlFor="biba">Biba</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-input">
                                    <label htmlFor="rating">Ratings</label>
                                    <input type="range" min="0" max="5" step="1" id="rating" />
                                </div>
                                <div className="price-sort">
                                    <h3>Sort By Price</h3>
                                    <div className="inputs">
                                        <div className="input">
                                            <input type="checkbox" id="lowToHigh" />
                                            <label htmlFor="lowToHigh">Low To High</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="highToLow" />
                                            <label htmlFor="highToLow">High To Low</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-arrow">
                            <img src={iconArrow} alt="arrow" className="arrow-icon" onClick={handleFilterSideBar} style={arrowImgStyle} />
                        </div>
                    </div>
                </aside>
                <div className="products-container">
                    <h2 style={subHeadingStyle}>Showing All Products</h2>
                    <div className="all-products-container">
                        <ul>
                            {
                                products.map((product, index) => {
                                    const { image, _id, in_stock, original_price, price, size, rating, title } = product;
                                    return (<li key={index} className="cart-product-card">
                                        <img src={image} alt={title} className="product-image" />
                                        <div className="specs-container">
                                            <div className="product-title-container">
                                                <span className="product-title">{title}</span>
                                            </div>
                                            <div className="product-price-section">
                                                <div className="product-price">
                                                    <span className="product-currPrice">₹{price}</span>
                                                    <span className="product-mrp">₹{original_price}</span>
                                                </div>
                                                <span className="product-off">33% OFF</span>
                                            </div>
                                            <div className="cart-btn">
                                                <span className="quantity-caption">Quantity:</span>
                                                <button className="btn-decrement">-</button>
                                                <span className="product-quantity">5</span>
                                                <button className="btn-increment">+</button>
                                            </div>
                                            <div className="heartSizeRating">
                                                <span className="heart">
                                                    <FavoriteIcon className="icon-heart" />
                                                </span>
                                                <span className="rating">⭐{rating}</span>
                                                <span className="size">{size}</span>
                                            </div>
                                            <div className="btn-container">
                                                {in_stock ? <button className="btn-remove-wishList">Add To Cart</button> : <button disabled className="btn-remove-wishList">Out Of Stock</button>}
                                                <Link to={`/productCard/${_id}`} className="btn-show-description">Show Description</Link>
                                            </div>
                                        </div>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListingPage