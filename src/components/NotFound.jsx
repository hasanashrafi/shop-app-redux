
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-error animate-bounce mb-4" />
        <h1 className="text-4xl font-bold text-error">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="hover:bg-primary hover:text-light border border-primary mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
