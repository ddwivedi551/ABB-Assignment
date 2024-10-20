import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../product-card/product-card'
import { product as dummyProducts } from './product-listing-dummy';
import { useNavigate, useLocation } from 'react-router-dom';


import './product-listing.css';

function ProductListing() {
    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        }
        fetchProducts();
    }, []);



    const handleClick = (id) => {
        if (location === '/') {
            const email = sessionStorage.getItem('GeniX-email');
            if (email) {
                navigate(`/dashboard`);
            } else {
                navigate(`/login`);
            }
        } else {
            navigate(`/product/${id}`);
        }

    };


    return (
        <div className="product-listing">
            <div className="product-grid">
                {dummyProducts.map((product) => (
                    <ProductCard product={product} onBidClick={() => { handleClick(product.product_id) }} />
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
