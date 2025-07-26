import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../store/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaShoppingBag } from 'react-icons/fa';

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // Example recommended products — replace with real logic if needed
  const recommended = [
    {
      id: 101,
      name: 'Asus Pro Gaming Laptop',
      image: 'https://via.placeholder.com/150',
      price: 1299,
      sale: 25,
    },
    {
      id: 102,
      name: 'IPS LCD Gaming Monitor',
      image: 'https://via.placeholder.com/150',
      price: 499,
    },
    {
      id: 103,
      name: 'HAVIT HV-G92 Gamepad',
      image: 'https://via.placeholder.com/150',
      price: 89,
      isNew: true,
    },
    {
      id: 104,
      name: 'AK-900 Wired Keyboard',
      image: 'https://via.placeholder.com/150',
      price: 75,
    },
  ];

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <p className="mb-4">You haven't added any items to your wishlist yet.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Wishlist Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Wishlist ({items.length})</h2>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(clearWishlist())}
            className="text-red-600 hover:underline text-sm"
          >
            <FaTrashAlt className="inline-block mr-1" /> Clear All
          </button>
          <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
            Move All To Bag
          </button>
        </div>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {items.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-3 shadow-sm hover:shadow-md">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{product.sale}%
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
            <p className="text-gray-900 font-bold mb-2">${product.price}</p>
            <button className="w-full bg-black text-white text-sm py-1 rounded hover:bg-gray-800 mb-2">
              Add To Cart
            </button>
            <button
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Just For You</h2>
        <button className="text-sm text-gray-600 hover:underline">See All</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {recommended.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-3 shadow-sm hover:shadow-md">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{product.sale}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
            <p className="text-gray-900 font-bold mb-2">${product.price}</p>
            <button className="w-full bg-black text-white text-sm py-1 rounded hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
