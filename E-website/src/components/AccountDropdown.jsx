// src/components/AccountDropdown.js
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { logout } from '../store/slices/authSlice';

const AccountDropdown = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 focus:outline-none">
        <span className="font-medium">{user.name || user.email}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </Link>
        <Link
          to="/orders"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Orders
        </Link>
        <Link
          to="/wishlist"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Wishlist
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountDropdown;