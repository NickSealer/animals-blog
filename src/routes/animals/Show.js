import React from 'react'
import { Animal } from '../../components/animals/Animal'

export const Show = ({user}) => {
  return (
    <div className='container'>
      <Animal user={user}/>
    </div>
  )
}
