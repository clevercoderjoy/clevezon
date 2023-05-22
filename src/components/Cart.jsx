import React from 'react';
import { Link } from 'react-router-dom';

import cart from "../styles/cart.css";
import { products } from "../backend/db/products";

function Cart() {
    return (
        <>
            <div className="cart-container">
                <ul>
                    {
                        products.map((product) => {
                            const { image, original_price, price, size, title } = product;
                            return (<li>
                                <img src={image} alt={title} className="product-image" />
                                <div className="product-title">
                                    <span className="product-title">{title}</span>
                                </div>
                                <div className="product-price">
                                    <span className="product-currPrice">{price}</span>
                                    <span className="product-mrp">{original_price}</span>
                                    <span className="product-off">% OFF</span>
                                </div>
                                <div className="sizeReviewRatingTrending">
                                    <span className="product-size">{size}</span>
                                    <button className="btn-decrement">-</button>
                                    <span className="product-quantity">Quantity</span>
                                    <button className="btn-increment">+</button>
                                </div>
                                <button className="btn-remove">Remove from Cart</button>
                            </li>)
                        })
                    }
                </ul>
                <aside className="cart-order-summary">
                    <h2>Cart Price Details</h2>
                    <ul className="cart-summary">
                        {
                            products.map((product) => {
                                const { price, title } = product;
                                return (<li>
                                    <span className="cart-summary">{title}</span>
                                    <span className="cart-quantity">Quantity{ }</span>
                                    <span className="cart-price">{price}</span>
                                </li>)
                            })
                        }
                    </ul>
                    <span className="cart-total">Total Price: { }</span>
                    <button className="cart-checkout">Checkout</button>
                </aside>
            </div>
        </>
    )
}

export default Cart

/*
category : "Men"
delivery_time : "9"
description : "Men Brown Pure Cotton Polo Collar Pure Cotton T-shirt"
image : "https://res.cloudinary.com/donqbxlnc/image/upload/v1648516571/fashify/25d7ff1d-6680-4629-b7f8-dda51fb89dc61592396707535-Nautica-Men-Tshirts-3811592396706267-4_hxanis.webp"
in_stock : true
original_price : "1199"
price : "719"
rating : "3.9"
reviews : "2.9k"
size : "L"
title : "Louis Philippe Sport"
trending : false
_id : "db103856-042d-4f7a-8
 */