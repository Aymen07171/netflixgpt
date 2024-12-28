import React, { useState, useRef } from 'react';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { checkValidData } from '../Utils/validata';
import { useNavigate } from 'react-router-dom';
import { Background_netflix } from '../Utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error message when toggling form
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
        .then((userCredential) => {
          
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-full">
        <img 
          src= {Background_netflix}
          alt="Background_netflix"
          className="w-full h-screen object-cover"
        />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="absolute z-30 p-12 w-3/12 min-w-[300px] bg-black my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-md"
      >
        <h1 className="text-white font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
          />
        )}
        
        <input
          type="email"
          ref={email}
          placeholder="Email address"
          className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
        />
        
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
        />

        {errorMessage && (
          <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-4 my-6 rounded font-semibold hover:bg-red-700 transition-colors"
          onClick={handleButtonClick}
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