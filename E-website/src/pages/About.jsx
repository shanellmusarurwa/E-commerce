import { Link } from 'react-router-dom';
import { FaHome, FaDollarSign, FaGift, FaWallet } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa'; 
import { FaHeadset } from 'react-icons/fa'; 
import { FaShieldAlt } from 'react-icons/fa'; 


const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Our Story with Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia's premier online shopping masterpiece with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 screens and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-gray-700">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assessment in categories ranging from consumer,
            </p>
          </div>

          <div className="md:w-1/2">
            <img 
              src="/Side Image.png" 
              alt="Our Story" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Stats Cards - Now with 4 cards */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 - Home Icon */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-dark-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10.5k</h3>
              <p className="text-dark-600">Software that you can start</p>
            </div>
            
            {/* Card 2 - Dollar Sign Icon */}
            <div className="bg-red-600 p-8 rounded-lg shadow-md text-center text-white">
              <div className="bg-dark-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDollarSign className="text-dark-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">33k</h3>
              <p className="text-white-600">Migrantly broadcasted from</p>
            </div>
            
            {/* Card 3 - Gift Bag Icon */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center text-dark">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGift className="text-dark-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">45.5k</h3>
              <p className="">Customerman started the next store</p>
            </div>
            
            {/* Card 4 - Wallet Icon */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWallet className="text-dark-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2">25k</h3>
              <p className="text-dark-600">Retired guests leave on our store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Team Members with Pagination Dots */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img 
                src="/Frame 888.png" 
                alt="Tom Cruise" 
                className="w-full rounded-lg mb-4"
              />
            
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="/Frame 887.png" 
                alt="Emma Watson" 
                className="w-full rounded-lg mb-4"
              />
              
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <img 
                src="/Frame 889.png" 
                alt="Will Smith" 
                className="w-full rounded-lg mb-4"
              />
              
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 4: Features with Icons */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-dark text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">3B</h3>
              <h4 className="font-bold mb-2">FREE AND FAST DELIVERY</h4>
              <p className="text-gray-600">Photo 364-40-7, 70° CE (5180m) (over $140)</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-dark text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">6A</h3>
              <h4 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h4>
              <p className="text-gray-600">Flexive: 24/7 customer support</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-dark text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">EXCLUSIVE</h3>
              <h4 className="font-bold mb-2">Subscribe</h4>
              <p className="text-gray-600 mb-4">Get 10% off your first order</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;