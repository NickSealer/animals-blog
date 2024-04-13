import React, { useEffect, useState } from 'react'
import { Details } from '../Details'
import { useParams } from 'react-router-dom'
import db from '../../firebase'
import { Loading } from '../Loading'

export const Animal = () => {
  const { id } = useParams('id')
  const [animal, setAnimal] = useState()

  useEffect(() => {
    try {
      const getAnimal = async () => {
        const animalRef = await db.collection('animals').doc(id).get();
        if (animalRef.exists) {
          let result = { id, ...animalRef.data() }
          setAnimal(result)
        } else {
          alert('No animal found.')
        }
      }
      getAnimal()
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }, [id])

  return (
    <>
      {animal ? (
        <Details animal={animal} />
      ) : (
        <Loading />
      )}
    </>
  )
}
