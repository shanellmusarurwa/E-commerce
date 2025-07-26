import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    // Mock product data matching your image
    const mockProduct = {
      id,
      name: 'Havic HV G-92 Gamepad',
      price: 192.00,
      description: 'PlayStation 5 Controller Start High quality vinyl-vote car channel controller for every bubble free install & mess free removed Pressure sensitive.',
      images: [
        '/Frame 894.png',
        '/Frame 895.png',
        '/Frame 896.png',
      ],
      rating: 5,
      reviews: 100,
      brand: 'Havic',
      sizes: ['2', '10', '14'],
      inStock: true
    };
    setProduct(mockProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }
    dispatch(addToCart({ ...product, quantity }));
  };

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image - Main */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg p-8 mb-4 flex justify-center items-center">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} Reviews) | </span>
            <span className="font-medium ml-1">{product.brand}</span>
          </div>
          
          <div className="text-2xl font-bold text-primary mb-6">${product.price.toFixed(2)}</div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Colours:</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-600"></div>
              <div className="w-8 h-8 rounded-full bg-red-600"></div>
              <div className="w-8 h-8 rounded-full bg-black"></div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Size:</h3>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Free Delivery</span>
              <span className="ml-2 text-gray-500">Let's take postcards for Safaru Avantense</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Return Delivery</span>
              <span className="ml-2 text-gray-500">Free 16 Easy Delving Mounts Details</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2"
              >
                +
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              <FaShoppingCart className="mr-2" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-gray-100 rounded-lg p-4 mb-4 flex justify-center">
              <img src="/Cart (13).png" alt="AK-900" className="h-40 object-contain" />
            </div>
            <h3 className="font-medium">AK-900 Wheel Keyboard</h3>
            <div className="text-primary font-bold mt-2">$5100</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-gray-100 rounded-lg p-4 mb-4 flex justify-center">
              <img src="/Cart (14).png" alt="IP5 Monitor" className="h-40 object-contain" />
            </div>
            <h3 className="font-medium">IP5 LCD Gaming Monitor</h3>
            <div className="text-primary font-bold mt-2">$5174</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;