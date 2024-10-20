import React, { useState } from 'react';
import Countdown from '../countdown/countdown';

import './bidding-popup.css'

const BidPopup = ({ onClose , product}) => {
    const [straightBid, setStraightBid] = useState(0);
    const [maxBid, setMaxBid] = useState(0);

    return (
        <div className="bid-popup">
            <div className="bid-popup-content">
                <div className="bid-popup-header">
                    <label className="bid-label">Submit Bid |<span className='text-size'>{product.name}</span></label>
                    <button onClick={() => { onClose(false) }} className="close-button">&times;</button>
                </div>
                <div className="bid-popup-body">
                    <div className="bid-input">
                        <label className="bid-text-label">Straight bid</label>
                        <div className="bid-control">
                            <input type="number" className="bid-input-box" value={straightBid} onChange={(e) => setStraightBid(parseInt(e.target.value))} />
                        </div>
                    </div>
                    <div className="bid-input">
                        <label className="bid-text-label">Maximum bid</label>
                        <div className="bid-control">
                            <input type="number" className="bid-input-box" value={maxBid} onChange={(e) => setMaxBid(parseInt(e.target.value))} />
                        </div>
                    </div>
                    <div className="bid-info">
                        <div className='bid-info-row'><span className='text-size'>Minimum Bid: </span><span><strong>${product.minimum_bid}</strong></span></div>
                        <div className='bid-info-row'><span className='text-size'>Current Bid: </span><span><strong>${product.current_bid}</strong></span></div>
                        <span className='text-size'><Countdown targetDate={new Date(product.ends_in)} /></span>
                    </div>
                </div>
                <div className='button-container'><button className="submit-button">Submit</button></div>
            </div>
        </div>
    );
};

export default BidPopup;