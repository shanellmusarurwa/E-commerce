import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    lastName: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    phone: '',
    saveInfo: false
  });
   
  const navigate = useNavigate();
  const { items, total } = useSelector(state => state.cart);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 border-b">
        <div className="container mx-auto">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link> / 
            <Link to="/contact" className="hover:text-primary ml-1">Contact</Link> / 
            <Link to="/about" className="hover:text-primary ml-1">About</Link> / 
            <Link to="/signup" className="hover:text-primary ml-1">Sign Up</Link> / 
            <span className="text-gray-800 ml-1">CheckOut</span>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">CheckOut</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6">
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

              {/* First Name & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {/* Street Address */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Street Address*</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {/* Apartment */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Apartment, floor, etc. (Optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Town/City & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Town/City*</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Save Info Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6">
              <h2 className="text-xl font-semibold mb-6">Your Order</h2>

              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between font-medium mb-2">
                  <span>Product</span>
                  <span>Total</span>
                </div>

                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-gray-600 mb-1">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <input type="radio" id="bank" name="payment" className="mr-2" />
                    <label htmlFor="bank">Bank</label>
                  </div>
                  <div className="flex space-x-4">
                    <FaCcVisa className="text-blue-900 text-xl" />
                    <FaCcMastercard className="text-red-600 text-xl" />
                    <FaPaypal className="text-blue-700 text-xl" />
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="cash" name="payment" className="mr-2" />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>

              {/* Coupon */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-grow px-4 py-2 border rounded-md sm:rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button className="sm:ml-2 px-6 py-2 bg-red-600 text-white rounded-md sm:rounded-r-md hover:bg-red-700">
                    Apply Coupon
                  </button>
                </div>
              </div>

            <button
               onClick={() => navigate('/this-route-does-not-exist')}
               className="w-44 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Place Order
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
