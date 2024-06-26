import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

export const Logout = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  return (
    <Link onClick={handleLogout} className='nav-link'>Logout</Link>
  )
}
