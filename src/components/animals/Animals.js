import React from 'react'
import api from '../../animalsMock'
import { Card } from '../Card';

export const Animals = () => {
  const animals = api;

  return (
    <>
      {
        animals.map((animal) => {
          return (
            <Card animal={animal} key={animal.id}/>
          )
        })
      }
    </>
  )
}
