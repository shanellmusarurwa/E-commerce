import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { FaUser, FaSearch, FaTimes } from 'react-icons/fa';

const Cart = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 border-b">
        <div className="container mx-auto">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link> / <span className="font-medium text-black">Cart</span>
          </div>
        </div>
      </div>

      {/* Main Cart Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Cart Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-50 p-4 font-medium text-gray-700 border-b">
            <div className="col-span-5">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {/* Empty Cart */}
          {items.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              Your cart is empty
            </div>
          ) : (
            <>
              {/* Cart Items */}
              {items.map(item => (
                <div key={item.id} className="grid grid-cols-12 items-center p-4 border-b">
                  <div className="col-span-5 flex items-center space-x-4">
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-gray-400 hover:text-red-500 text-xl"
                    >
                      <FaTimes />
                    </button>
                    <img 
                      src={item.image || 'https://via.placeholder.com/80'} 
                      alt={item.name} 
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="col-span-2 text-center">${item.price.toFixed(2)}</div>
                  <div className="col-span-3 flex justify-center">
                    <div className="flex border rounded-md w-24">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-2 py-1 border-r hover:bg-gray-100"
                      >
                        -
                      </button>
                      <div className="flex-grow text-center px-2 py-1">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-2 py-1 border-l hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mb-8">
          <Link 
            to="/" 
            className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
          >
            Return To Shop
          </Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
          >
            Update Cart
          </button>
        </div>

        {/* Bottom Section - Coupon and Cart Total */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coupon Code */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex">
              <input 
                type="text" 
                placeholder="coupon code" 
                className="w-48 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm mr-2"
              />
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">Cart Total</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <div className="flex justify-between border-t pt-3 font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="block w-full py-3 bg-red-600 text-white text-center rounded-md hover:bg-red-700 transition-colors mt-4"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Cart;