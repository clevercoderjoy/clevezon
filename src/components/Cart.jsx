import React from 'react';
import { Link } from 'react-router-dom';

import cart from "../styles/cart.css";
import { products } from "../backend/db/products";
import iconHeart from "../assets/images/iconsHeart.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Cart() {
    return (
        <>
            <h2 className="cart-heading">My Cart Items</h2>
            <div className="cart-container">
                <div className="cart-item-container">
                    <ul className="cart-items">
                        {
                            products.map((product, index) => {
                                const { image, original_price, price, _id, size, rating, title } = product;
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
                                        <div className="cart-btn-container">
                                            <button className="btn-remove">Remove From Cart</button>
                                            <Link to={`/productCard/${_id}`} className="btn-show-description">Show Description</Link>
                                        </div>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <aside className="cart-order-summary">
                    <h2>Cart Summary</h2>
                    <p className="subtotal">Subtotal (2 items): ₹220.00</p>
                    <ul className="cart-summary">
                        {
                            products.map((product, index) => {
                                const { price, title } = product;
                                return (<li key={index} className="cart-summary-product">
                                    <div className="titleQuantity">
                                        <span className="cart-summary">{title}</span>
                                        <span className="cart-quantity">({5})</span>
                                    </div>
                                    <span className="cart-price">₹{price}</span>
                                </li>)
                            })
                        }
                    </ul>
                    <hr />
                    <div className="cart-summary-action">
                        <div className="cart-summary-price">
                            <span className="cart-total">Total Price:</span>
                            <span className="cart-total-price"> ₹{2000}</span>
                        </div>
                        <button className="cart-checkout">Checkout</button>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Cart