import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-full">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3f9d8832-8290-4ada-8bff-1e193e590c96/web_collection/MA-en-20241216-TRIFECTA-b8364dcc-374d-41da-96f1-b0cd0f88b1da_large.jpg" 
          alt="Background_netflix"
          className="w-full h-screen object-cover"
        />
      </div>
      <form className="absolute z-30 p-12 w-3/12 min-w-[300px] bg-black my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-md">
        <h1 className="text-white font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
          />
        )}
        
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
        />
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-4 my-6 rounded font-semibold hover:bg-red-700 transition-colors"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
          <span 
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
          {" "}right now.
        </p>
      </form>
    </div>
  );
};

export default Login;
