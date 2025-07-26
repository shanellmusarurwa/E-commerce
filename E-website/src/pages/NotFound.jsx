import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 border-b">
        <div className="container mx-auto">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link> / <span className="font-medium text-black">404 Error</span>
          </div>
        </div>
      </div>

      {/* 404 Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">404 Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Your visited page not found. You may go to home page.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Back to home page
        </Link>
      </main>

     
    </div>
  );
};

export default NotFound;