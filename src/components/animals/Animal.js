import React from 'react'
import api from '../../animalsMock'
import { Details } from '../Details'
import { useParams } from 'react-router-dom'

export const Animal = () => {
  const {id} = useParams('id')
  const animal = api[id]

  return (
    <>
      <Details animal={animal}/>
    </>
  )
}
