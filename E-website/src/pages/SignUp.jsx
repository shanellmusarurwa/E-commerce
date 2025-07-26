import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Go to login after successful signup
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img 
              src="/side img.png" 
              alt="Sign up illustration" 
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-1">Create an account</h1>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />

              <input
                type="text"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-md mt-6 hover:bg-gray-50">
              <FcGoogle className="text-xl" />
              <span>Sign up with Google</span>
            </button>

            <div className="mt-6 text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
