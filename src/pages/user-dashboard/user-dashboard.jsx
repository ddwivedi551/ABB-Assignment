import React from 'react';
import './user-dashboard.css';
import ProductListing from '../../components/product-listing/product-listing';

const UserDashboard = () => {
    return (<div className='conatiner'>
        <div className="explore-section">
            <span className='heading'>Welcome<span className='heading-color'> Olivia!</span> </span>
        </div>
        <ProductListing/>
    </div>)
}

export default UserDashboard