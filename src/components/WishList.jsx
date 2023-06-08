import React from 'react';

import { products } from "../backend/db/products";
import iconHeart from "../assets/images/iconsHeart.png";
import wishList from "../styles/wishList.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function WishList() {
    return (
        <>
            <h2 className="wishList-heading">My WishList</h2>
            <div className="cart-container">
                <div className="cart-item-container wishList-item-container">
                    <ul className="cart-items wishList-items">
                        {
                            products.map((product, index) => {
                                const { image, original_price, in_stock, _id, price, size, rating, title } = product;
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
                                        <div className="heartSizeRating">
                                            <span className="heart">
                                                <FavoriteIcon className="icon-heart" />
                                            </span>
                                            <span className="rating">⭐{rating}</span>
                                            <span className="size">{size}</span>
                                        </div>
                                        <div className="btn-container">
                                            <button className="btn-remove-wishList">Remove from WishList</button>
                                            <Link to={`/productCard/${_id}`} className="btn-show-description">Show Description</Link>
                                        </div>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WishList