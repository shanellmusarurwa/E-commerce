import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { FaQrcode } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid - 5 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {/* Column 1 - Exclusive */}
          <div>
            <h1 className="text-xl font-bold mb-2">Exclusive</h1>
            <h2 className="text-base font-semibold mb-1">Subscribe</h2>
            <p className="text-gray-400 text-sm mb-2">Get 10% off your first order</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-1 text-sm bg-transparent text-white border border-gray-600 rounded focus:outline-none focus:border-white pr-8"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <FaArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h3 className="text-base font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>IT Bijay sanari, Ohtaka,</li>
              <li>DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Column 3 - Account */}
          <div>
            <h3 className="text-base font-semibold mb-2">Account</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><Link to="/account" className="hover:text-white">My Account</Link></li>
              <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            </ul>
          </div>

          {/* Column 4 - Quick Link */}
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Link</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms Of Use</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5 - Download App */}
          <div>
            <h3 className="text-base font-semibold mb-2">Download App</h3>
            <p className="text-gray-400 text-sm mb-2">Save $3 with App New User Only</p>
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded flex items-center justify-center">
                <FaQrcode className="text-black text-xl" />
              </div>
              <div className="flex flex-col gap-1">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-5 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-5 w-auto"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={14} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-xs">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;