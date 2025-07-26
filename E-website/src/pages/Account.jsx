import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Account = () => {
  const { user } = useSelector(state => state.auth);
  
  return (
    <div className="min-h-screen bg-white">
  
      {/* Account Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Name</span> / My Account
          </div>
          <div className="text-gray-600">
            Welcome, <span className="font-medium">{user?.name || 'User'}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Account Sidebar */}
          <div className="md:w-1/4">
            <div className=" bg-white p-6  border-gray-200">
              <h2 className="text-lg font-bold mb-6">Manage My Account</h2>
              
              <nav className="space-y-6">
                {/* Section 1 */}
                <div>
                  <p className=" text-red-600 mb-2">My Profile</p>
                  <p className="block text-gray-500 hover:text-black">
                    Address Book
                  </p>
                  <p className="block text-gray-500">My Payment Options</p>
                </div>
                
                
                {/* Section 2 */}
                <div>
                  <h3 className="font-bold mb-2">My Orders</h3>
                  <div className="text-gray-600 space-y-1">
                    <div>My Returns</div>
                    <div>My Cancellations</div>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div>
                  <h3 className="font-bold mb-2">My Wishlist</h3>
                </div>
              </nav>
            </div>
          </div>

          {/* Account Details */}
          <div className="md:w-3/4">
            <div className="bg-white p-6 border border-gray-200">
              <h2 className="text-lg font-bold mb-6">My Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-3 py-2  bg-gray-300 rounded-md focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-3 py-2  bg-gray-300  rounded-md focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <div className="p-2  bg-gray-300 rounded-md">
                    timothy@whosh.com
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700  mb-1">Address</label>
                  <div className="p-2  bg-gray-300 rounded-md">
                    Chapter 1, SS36, United State
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold mb-4">Password Changes</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-300 rounded-md focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2  bg-gray-300 rounded-md focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-300 rounded-md focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 bg-white text-gray-800 hover:bg-gray-100">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-red-600 text-white hover:bg-red-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;