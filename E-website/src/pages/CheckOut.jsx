import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });

  const { items, total } = useSelector(state => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 border-b">
        <div className="container mx-auto">
          <div className="text-sm text-gray-600">
            <Link to="/account" className="hover:text-primary">Account</Link> / 
            <Link to="/account" className="hover:text-primary ml-1">My Account</Link> / 
            <Link to="/products" className="hover:text-primary ml-1">Product</Link> / 
            <Link to="/edit" className="hover:text-primary ml-1">View Edit</Link> / 
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-6">
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

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input type="radio" id="bank" name="payment" className="mr-2" />
                  <label htmlFor="bank">Bank</label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="cash" name="payment" className="mr-2" />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Submit
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Support
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Ticket
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Save
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Code on Delivery
                </button>
              </div>

              <button className="w-full mt-4 py-3 bg-primary text-white rounded-md hover:bg-primary-dark">
                Submit Order
              </button>

              <button className="w-full mt-2 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white">
                Phone Order
              </button>

              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark">
                  Apply Custom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;