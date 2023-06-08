import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { products } from "../backend/db/products";
import productCard from "../styles/productCard.css";
import iconHeart from "../assets/images/iconsHeart.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductCard() {
    const { productId } = useParams();
    const product = products.filter((item) => item._id === productId);
    console.log(product[0]);

    return (
        <>
            <div className="product-card">
                <img src={product[0]?.image} alt="" className="product-card-product-img" />
                <div className="product-card-specs-container">
                    <div className="product-card-product-title">{product[0]?.title}</div>
                    <div className="product-card-product-description-container">
                        <div className="product-card-product-description-caption">Description:</div>
                        <div className="product-card-product-description">
                            {product[0]?.description}
                        </div>
                    </div>
                    <div className="product-card-product-price-container">
                        <div className="product-card-product-price">
                            <span className="product-card-product-price-caption">Price:</span>
                            <span className="product-card-product-currPrice">₹{product[0]?.price}</span>
                            <span className="product-card-product-mrp">₹{product[0]?.original_price}</span>
                        </div>
                        <span className="product-card-product-off">33% OFF</span>
                    </div>
                    <div className="product-card-product-quantity-container">
                        <span className="product-card-product-quantity-caption">Quantity:</span>
                        <button className="product-card-product-btn-decrement btn">-</button>
                        <span className="product-card-product-product-quantity">5</span>
                        <button className="product-card-product-btn-increment btn">+</button>
                    </div>
                    <div className="product-card-product-heartSizeRating">
                        <span className="product-card-product-heart">
                            <FavoriteIcon className="product-card-product-icon-heart" />
                        </span>
                        <span className="product-card-product-rating">⭐{product[0]?.rating}</span>
                        <span className="product-card-product-size">{product[0]?.size}</span>
                    </div>
                    <div className="product-card-product-delivery">Delivered to you in <strong>{product[0]?.delivery_time}</strong> days</div>
                    <div className="product-card-product-cart-btn-container">
                        {product[0].in_stock ? <button className="product-card-product-btn-remove btn">Add To Cart</button> : <button disabled className="product-card-product-btn-remove">Out Of Stock</button>}
                        <Link to="/productListingPage" className="product-card-product-btn-show-description btn">All Products</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard