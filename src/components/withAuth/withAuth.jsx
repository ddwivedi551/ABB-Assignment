import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// HOC to check if email is present in sessionStorage
const withAuth = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const email = sessionStorage.getItem('GeniX-email');
            if (!email) {
                navigate('/login');
            }
        }, [navigate]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
