import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white py-4 px-6">
        <div className="container mx-auto">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link> / <span className="font-medium text-black">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info - Made more compact */}
          <div className="lg:w-2/5 border border-gray-200 rounded-lg p-4"> {/* Narrower width */}
            <div className="flex items-start mb-4">
              <div className="bg-red-600 p-2 rounded-full mr-3 mt-1"> {/* Smaller icon */}
                <FaPhone className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Call To Us</h2> {/* Smaller heading */}
                <p className="text-gray-600 text-md mb-1">24/7, 7 days a week</p> {/* Smaller text */}
                <p className="text-gray-600 text-md">+8801611112222</p>
              </div>
            </div>
            
            <div className="border-t border-dark-300 my-4"></div>
            
            <div className="flex items-start">
              <div className="bg-red-600 p-2 rounded-full mr-3 mt-1"> {/* Smaller icon */}
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Write To US</h3>
                <p className="text-gray-600 text-md mb-1">Response within 24 hours</p>
                <p className="text-gray-600 text-md">customers@exclusive.com</p>
                <p className="text-gray-600 text-md">suppliers@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Takes more space */}
          <div className="lg:w-3/5 border border-gray-200 rounded-lg p-6"> {/* Wider width */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;