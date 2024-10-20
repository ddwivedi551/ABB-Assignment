import React from "react";
import ProductCard from "../../components/product-card/product-card";
import Review from '../../components/review/review';
import { useParams } from 'react-router-dom';
import { product as dummyProducts } from '../../components/product-listing/product-listing-dummy';
import { Link } from 'react-router-dom';
import BiddingPopup from '../../components/bidding-popup/bidding-popup';

import "./product-page.css";

const ProductPage = ({ }) => {
    const [showBiddingPopup, setShowBiddingPopup] = React.useState(false)
    const { id } = useParams();
    const product = dummyProducts.find((item) => item.product_id === parseInt(id));

    return (
        <>
            {showBiddingPopup && <BiddingPopup onClose={setShowBiddingPopup} product={product} />}
            <div className="product-details">
                <div className="auction-container">
                    {/* Image Section */}
                    <div className="image-section">
                        <div className="top-section"><Link className="back-button" to="/dashboard">Back to catalog</Link></div>
                        <div className="product-details"><ProductCard product={product} showBidButton={false} /></div>
                    </div>

                    {/* Description Section */}
                    <div className="description-section">
                        <div className="top-section"><span className="description-heading">Description</span></div>
                        <p>{product.description}</p>
                        <div className="review-section">
                            <span className="description-heading">Reviews</span>
                            <Review productReview={product.reviews} />
                        </div>
                    </div>

                    {/* Bid History Section */}
                    <div className="bid-history-section">
                        <ul className="bid-list">
                            {product.bidding_history.map((item, index) => (
                                <li>{`${item.bidder_type} bids $${item.bid_amount}`}</li>
                            ))}
                        </ul>
                        <button className="product-bid-button" onClick={() => { setShowBiddingPopup(true) }}>Bid now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;