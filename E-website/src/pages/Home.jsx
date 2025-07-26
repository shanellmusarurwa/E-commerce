import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiChevronRight, 
  FiChevronLeft,
  FiHeadphones,
  FiMonitor,
  FiWatch,
  FiSmartphone,
  FiCamera,
  FiPackage,
  FiArrowRight
} from 'react-icons/fi';
import { 
  BsPhone,
  BsSmartwatch,
} from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa'; 
import { FaHeadset } from 'react-icons/fa'; 
import { FaShieldAlt } from 'react-icons/fa'; 


const HomePage = () => {
  // Categories data
  const mainCategories = [
    { name: "Women's Fashion" },
    { name: "Men's Fashion" },
    { name: "Electronics"  },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor"},
    { name: "Baby's & Toys" },
    { name: "Groceries & Pets"},
    { name: "Health & Beauty" }
  ];

  const browseCategories = [
    { name: "Phones", icon: <BsPhone /> },
    { name: "Computers", icon: <FiMonitor /> },
    { name: "SmartWatch", icon: <BsSmartwatch /> },
    { name: "Camera", icon: <FiCamera /> },
    { name: "Headphones", icon: <FiHeadphones /> }
  ];

  // Product data
  const flashSaleProducts = [
    { id: 1, name: 'AX 900 Wheat Keyboard', price: 100,  image: '/Frame 570.png' },
    { id: 2, name: 'IPR LCD Carrying Mainbox', price: 500,  image: '/Frame 570 (1).png' },
    { id: 3, name: '3 Series Camelot Chalk', price: 300,  image: '/Frame 570 (2).png' },
    { id: 4, name: '5 Series Car', price: 270,  image: '/Frame 570 (3).png' }
  ];

  const bestSellingProducts = [
    { id: 1, name: 'The north coast', price: 200, originalPrice: 350, rating: 4, reviews: 40, image: '/Cart.png' },
    { id: 2, name: 'Cancel duffle bag', price: 95, originalPrice: 163, rating: 5, reviews: 65, image: '/Cart (1).png' },
    { id: 3, name: 'Rose liquid CPU Cooler', price: 100, originalPrice: 270, rating: 4, reviews: 46, image: '/Cart (2).png' },
    { id: 4, name: 'Small Boot Self', price: 350, originalPrice: 350, rating: 3, reviews: 36, image: '/Cart (3).png' }
  ];

  const exploreProducts = [
    { id: 5, name: 'Dry Dog Food', price: 79, originalPrice: 120, rating: 4, reviews: 52, image: '/Cart (4).png' },
    { id: 6, name: 'Cannon E06 DGLR Camera', price: 699, originalPrice: 899, rating: 5, reviews: 128, image: '/Cart (5).png' },
    { id: 7, name: 'ASUS FHD Gaming Laptop', price: 49, originalPrice: 79, rating: 4, reviews: 87, image: '/Cart (6).png' },
    { id: 8, name: 'Curology Product Set', price: 89, originalPrice: 120, rating: 4, reviews: 43, image: '/Cart (3).png' },
    
  ];

  const newArrivals = [
    { image: '/Frame 684.png' },
    { image: '/Frame 685.png' },
    { image: '/Frame 686.png' },
    { image: '/Frame 687.png' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex">
        {/* Left Sidebar Navigation */}
        <div className="hidden md:block w-1/5 bg-gray-50 p-4">
  <ul className="space-y-2">
    {mainCategories.map((category, index) => (
      <li key={index} className="group">
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded transition cursor-pointer">
          <div className="flex items-center">
            <span>{category.name}</span>
          </div>
          {(category.name === "Women's Fashion" || category.name === "Men's Fashion") && (
            <FiArrowRight className="text-gray-500" />
          )}
        </div>
      </li>
    ))}
  </ul>
</div>

        {/* Main Content Area */}
        <div className="w-full flex items-center p-8">
          <div className="w-full flex justify-center">
              <img 
                src="/Frame 560.png" 
                alt="Featured Product" 
                className="w-full max-w-full h-auto object-contain" 
              />
          </div>
        </div>
      </section>

     {/* Flash Sales Section */}
<section className="py-12 px-8">
  <div className="container mx-auto">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mr-4">Flash Sales</h2>
        <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <span className="font-medium">Ends in:</span>
          <div className="text-dark px-2 py-1 rounded">03</div>
          <span>:</span>
          <div className="text-dark px-2 py-1 rounded">23</div>
          <span>:</span>
          <div className="text-dark px-2 py-1 rounded">19</div>
          <span>:</span>
          <div className="text-dark px-2 py-1 rounded">56</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronLeft className="text-gray-700" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {flashSaleProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
          </div>
          <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-red-600 font-bold">${product.price}</span>
          </div>
          {/* Rating Stars */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">(4)</span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center">
      <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
        View All Products
      </button>
    </div>
  </div>
</section>

      {/* Browse By Category Section - Fixed */}
<section className="py-12 bg-gray-50 px-8">
  <div className="container mx-auto">
    {/* Added Categories red box */}
    <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-2">
      Categories
    </div>
    
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Browse By Category</h2>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronLeft className="text-gray-700" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {browseCategories.map((category, index) => (
        <div 
          key={index} 
          className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center 
            ${category.name === "Camera" ? 'bg-red-600 text-white' : 'bg-white text-gray-800'}`}
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 
            ${category.name === "Camera" ? 'bg-red-700' : 'bg-gray-100'}`}>
            {React.cloneElement(category.icon, { 
              className: `text-2xl ${category.name === "Camera" ? 'text-white' : 'text-gray-600'}`
            })}
          </div>
          <h3 className="font-medium">{category.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Best Selling Section */}
<section className="py-12 px-8">
  <div className="container mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Best Selling Products</h2>
      <button className="text-white font-medium  bg-red-600 border rounded-md py-3 px-8 hover:bg-red-700 transition-colors">
        View More
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {bestSellingProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
          <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-red-600 font-bold">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
            )}
          </div>
          {/* Rating Stars - Added this section */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Promotional Image */}
      <section className="py-8 px-8">
        <div className="container mx-auto">
          <img src="/Frame 600.png" alt="Special Offer" className="w-full rounded-lg" />
        </div>
      </section>
{/* Explore Our Products Section */}
<section className="py-12 px-8 bg-gray-50">
  <div className="container mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Explore Our Products</h2>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronLeft className="text-gray-700" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FiChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {exploreProducts.concat([
        { id: 9, name: 'Kids Electric Car', price: 79, originalPrice: 120, rating: 4, reviews: 52, image: '/Cart (7).png' },
    { id: 10, name: 'Jr Zoom Soocer Shooters', price: 699, originalPrice: 899, rating: 5, reviews: 128, image: '/Cart (8).png' },
    { id: 11, name: 'GP11 Shooter USB Gamepad', price: 49, originalPrice: 79, rating: 4, reviews: 87, image: '/Cart (9).png' },
    { id: 12, name: 'Quilted Satin Jacket', price: 89, originalPrice: 120, rating: 4, reviews: 43, image: '/Cart (10).png' }
      ]).map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
          <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-bold">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
        View All Products
      </button>
    </div>
  </div>
</section>
{/* New Arrivals - Fixed for Mobile and Tablet */}
<section className="mt-8 md:mt-12">
  <div className="container mx-auto">
    <h2 className="text-xl font-bold mb-4">New Arrival</h2>
    
    {/* Mobile View (only 3 images) */}
    <div className="lg:hidden grid grid-cols-2 gap-3">
      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
        <img 
          src={newArrivals[1].image} 
          alt="Collection 1" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
        <img 
          src={newArrivals[2].image} 
          alt="Product 1" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square col-span-2">
        <img 
          src={newArrivals[3].image} 
          alt="Product 2" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    
    {/* Desktop/Tablet View (original layout) */}
    <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-3 h-[500px]">
      {/* Left Column (2/3 width) */}
      <div className="lg:col-span-2 h-full bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={newArrivals[0].image} 
          alt="Main Product" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Column (1/3 width) */}
      <div className="grid grid-rows-2 gap-3 h-full">
        <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={newArrivals[1].image} 
            alt="Collection 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={newArrivals[2].image} 
              alt="Product 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={newArrivals[3].image} 
              alt="Product 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Section - Fixed spacing for tablet */}
<section className="services-section py-12 px-4 md:px-8 bg-white relative z-10 mb-8 md:mb-12 lg:mb-16">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Delivery Service */}
      <div className="service-card bg-white p-6  text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaTruck className="text-gray-600 text-2xl" />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">FREE AND FAST DELIVERY</h3>
        <p className="text-gray-600">From Monday to 30 October 2020</p>
      </div>

      {/* Customer Service */}
      <div className="service-card bg-white p-6   text-center  ">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaHeadset className="text-gray-600 text-2xl" />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
        <p className="text-gray-600">Monday, 24/7 November 5 PM</p>
      </div>

      {/* Money Back Guarantee */}
      <div className="service-card bg-white p-6  text-center ">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaShieldAlt className="text-gray-600 text-2xl" />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">MONEY BACK GUARANTEE</h3>
        <p className="text-gray-600">Not with other owners already</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;