import React from 'react'
import { Create } from '../../components/animals/Create'

export const New = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Add Animal</h1>
      <div className='container'>
        <Create />
      </div>
    </div>
  )
}
