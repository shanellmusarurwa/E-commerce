import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// Import auth actions correctly
import { listenToAuthChanges, logout } from './store/slices/authSlice';

// Import all components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

// Error boundary component (create this file)
import ErrorBoundary from './components/ErrorBoundary';

// Main App component with Redux hooks
function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Setup auth state listener with proper error handling
    try {
      const unsubscribe = dispatch(listenToAuthChanges());
      
      return () => {
        if (unsubscribe) unsubscribe();
      };
    } catch (error) {
      console.error('Auth listener error:', error);
    }
  }, [dispatch]);

  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/orders" element={<Account tab="orders" />} />
            <Route path="/account/settings" element={<Account tab="settings" />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ErrorBoundary>
    </Router>
  );
}

// Wrapper component that provides the Redux store
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;