import React from 'react';
import Countdown from '../countdown/countdown';

import './product-card.css'

const ProductCard = ({ product, showBidButton = true, onBidClick = () => { } }) => {

    return (
        <div key={product.id} className="product-card">
            <img src={product.product_image_url} alt={product.product_name} className="product-image" />
            <div className="product-details">
                <span className="product-status">{product.status}</span>
                <h4>{product.name}</h4>
                <p>Minimum Bid: <strong>${product.minimum_bid}</strong></p>
                <p>Current Bid: <strong>${product.current_bid}</strong></p>
                <p>Ends in: <Countdown targetDate={new Date(product.ends_in)} /></p>
                {showBidButton && <button className="bid-button" onClick={onBidClick}>Bid now</button>}
            </div>
        </div>
    )
}

export default ProductCard