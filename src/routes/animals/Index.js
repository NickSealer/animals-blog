import React from 'react'
import { Animals } from '../../components/animals/Animals'

export const Index = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Animals</h1>
      <div className='container'>
        <Animals />
      </div>
    </div>
  )
}
