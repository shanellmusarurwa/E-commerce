import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/config';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getFriendlyError = (code) => {
    switch (code) {
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/invalid-email':
        return 'Invalid email format.';
      default:
        return 'Something went wrong. Please try again.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      setIsLoading(true);
      dispatch(loginStart());
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch(loginSuccess({
        uid: user.uid,
        email: user.email,
        name: user.displayName || user.email.split('@')[0],
        photoURL: user.photoURL
      }));

      navigate('/');
    } catch (err) {
      const errorMessage = getFriendlyError(err.code);
      setError(errorMessage);
      dispatch(loginFailure(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Side Image */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img 
              src="/side img.png"  
              alt="Login" 
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Login Form */}
          <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-1">Log in to Exclusive</h1>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
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

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
                >
                  {isLoading ? 'Logging in...' : 'Log In'}
                </button>

                <Link to="/forgot-password" className="text-gray-600 hover:text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </form>

            <div className="mt-8 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;