import React from 'react';

import './review.css';

const Review = ({ productReview }) => {
    return (
        <div className="reviews-section">
            {
                productReview.map((review, index) => (
                    <div key={review.user_id} className="review-item">
                        <img src={review.reviewer_image_url} alt={`${review.author}'s profile`} className="review-author-image" />
                        <div className="review-content">
                            <div className="review-rating">
                                {'⭐'.repeat(review.rating)}
                            </div>
                            <p>{review.comment}</p>
                            <div className='author-details'>
                                <p className="review-author">{review.reviewer_name}</p>
                                <p className="review-date">{review.review_date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Review;
