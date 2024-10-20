import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import withAuth from './components/withAuth/withAuth';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home-page/home-page';
import ProductPage from './pages/product-page/product-page';
import UserDashboard from './pages/user-dashboard/user-dashboard';
import LoginPage from './pages/login-page/login-page';


const App = () => {
  const Productpage = withAuth(ProductPage);
  const Dashboardpage = withAuth(UserDashboard);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/product/:id" element={<Productpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
