import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login({ setpaginate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setError(false)
};

const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === '') {
        setPasswordError('Password is required');
    } else if (value.length < 6 || value.length > 12) {
        setPasswordError('Password must be between 6 and 12 characters');
    } else {
        setPasswordError('');
    }
    setError(false)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full h-full flex justify-center mb-6">
          <img
            src="/avtar.avif"
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                emailError ? 'border-red-500' : email ? 'border-green-500' : 'border-gray-300'
              }`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                passwordError ? 'border-red-500' : password ? 'border-green-500' : 'border-gray-300'
              }`}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <button
            type="button"
            onClick={() => {(email.length>0 && password.length>0 && emailError=="" && passwordError=="")?setpaginate(2):setError(true)}}
            className="w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
            Login
          </button>
            {error && <p className="text-red-500 text-sm mt-1">Validate the Form First</p>}

        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setpaginate: PropTypes.func.isRequired,
};
