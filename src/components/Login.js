import React, { useRef } from 'react'
import { useState } from 'react'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import foodcover from  "../../assets/food-cover.jpg"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return;

        if(!isSignInForm){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: ""
                  }).then(() => {
                    // Profile updated!
                    navigate("/")
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage)
            });
        }else{
            //sign in
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage)
            });
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <div className='absolute z-10 text-6xl md:px-8 py-2 font-bold md:text-8xl text-white md:bottom-6 md:right-3'>FOODSTORE</div>
        <div className='absolute'>
            <img src={foodcover} alt="logo" className=' md:h-[100vh] md:w-[100vw]'></img>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='w-8/12 md:w-5/12 lg:w-3/12 absolute bg-white my-36 mx-auto right-0 left-0 p-4 rounded-lg bg-opacity-80 '>
            <h1 className='font-bold py-4 text-3xl'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full'></input>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full'></input>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full'></input>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button onClick={handleButtonClick} className='p-4 my-6 rounded-lg w-full bg-orange-500 text-xl'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='py-4 cursor-pointer text-gray text-opacity-90 '>{isSignInForm ? "New to Foodstore?Sign up now!":"Already registered?Sign In"}</p>
        </form>
    </div>
  )
}

export default Login