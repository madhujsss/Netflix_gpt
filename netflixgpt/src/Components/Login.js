import Header from './Header'
import React, { useRef, useState } from 'react'
import '../../src/index.css';
import { checkvaliddata  } from '../Utils/validate';
import { BG_URL } from '../Utils/constants';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase"



const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
   

  //const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // const onFinish = () => {
 
  // };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  
  const handleButtonClick = () => {
    
    const message= checkvaliddata( email.current.value, password.current.value)
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
       // const user = userCredential.user;
       
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setErrorMessage(errorCode);
      });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
       // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setErrorMessage(errorCode);
      });
    }
  }

  return (
    <div>
    <Header />
    <div className="absolute W-full">
      <img className="w-full" src={BG_URL} alt="logo"   />
    </div>
    <form
      onSubmit={(e) => e.preventDefault(e)}
      className="w-6/12 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
    >
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {/* {!isSignInForm && (
        <input
          
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      )} */}
      <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
      <button
        className="p-4 my-6 bg-red-700 w-full rounded-lg"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already registered? Sign In Now."}
      </p>
    </form>
  </div>
  )
}

export default Login
