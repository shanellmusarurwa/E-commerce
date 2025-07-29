import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { items: cartItems } = useSelector(state => state.cart);
  const { items: wishlistItems } = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  // State for cart animation
  const [cartPulse, setCartPulse] = useState(false);
  const [prevCartCount, setPrevCartCount] = useState(cartItems.length);

  useEffect(() => {
    // Trigger animation when cart items increase
    if (cartItems.length > prevCartCount) {
      setCartPulse(true);
      const timer = setTimeout(() => setCartPulse(false), 1000); // Animation lasts 1 second
      return () => clearTimeout(timer);
    }
    setPrevCartCount(cartItems.length);
  }, [cartItems, prevCartCount]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      setIsAccountDropdownOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center space-x-8 w-full md:w-auto justify-between md:justify-start">
          <Link to="/" className="text-xl font-bold text-primary">Exclusive</Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Responsive Navigation Menu */}
        <div
          className={`w-full md:flex md:space-x-6 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
          } md:max-h-full`}
        >
          <nav className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary block">Home</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary block">Contact</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary block">About</Link>
            {!isAuthenticated && (
              <Link to="/signup" className="text-gray-600 hover:text-primary block">Sign Up</Link>
            )}
          </nav>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-start">
          {/* Search Bar */}
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <Link to="/wishlist" className="relative text-gray-600 hover:text-primary">
              <FaHeart className="text-xl" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative text-gray-600 hover:text-primary">
              <div className={`relative ${cartPulse ? 'animate-ping-once' : ''}`}>
                <FaShoppingCart className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-primary focus:outline-none"
                >
                  <span className="hidden md:inline">{user?.name || 'Account'}</span>
                  <FaUser className="text-xl" />
                  <FaChevronDown className={`text-xs transition-transform ${isAccountDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isAccountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <Link
                      to="/account"
                      onClick={() => setIsAccountDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/account/orders"
                      onClick={() => setIsAccountDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/wishlist"
                      onClick={() => setIsAccountDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wishlist
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-primary flex items-center">
                <FaUser className="text-xl" />
                <span className="hidden md:inline ml-1">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Add this to your global CSS file */}
      <style jsx>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-ping-once {
          animation: ping 0.5s ease-in-out 1;
        }
      `}</style>
    </header>
  );
};

export default Header;