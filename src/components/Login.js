import React, { useRef, useState } from 'react'
import { auth } from '../firebase'

export const Login = ({ user }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const emailRef = useRef('email-ref')
  const passwordRef = useRef('password-ref')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const highlightError = (color) => {
    emailRef.current.style.borderColor = color
    passwordRef.current.style.borderColor = color
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password);
      highlightError('#dee2e6')
    } catch (error) {
      highlightError('red')
      alert(`Error: ${error}`)
    }
  }

  return (
    <>
      <div className='container mt-5 p-5 text-center'>
        {!user ? (
          <form onSubmit={(e) => handleLogin(e)} className='login-form'>
            <div className='mb-5'>
              <h2>Login</h2>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email address</label>
              <input onChange={(e) => handleEmail(e)} ref={emailRef} type='email' id='email' className='form-control' placeholder='email@email.com' />
              <div className='form-text'>We'll never share your email with anyone else.</div>
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input onChange={(e) => handlePassword(e)} ref={passwordRef} type='password' id='password' className='form-control' />
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        ) : (
          <p>You are already logged in!</p>
        )}
      </div>
    </>
  )
}
