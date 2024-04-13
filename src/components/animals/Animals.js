import React, { useEffect, useState } from 'react'
import { Card } from '../Card';
import db from '../../firebase';
import { Loading } from '../Loading';

export const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const getAnimals = async () => {
        const response = await db.collection('animals').get();
        response.forEach((animal) => {
          let data = animal.data();
          let id = animal.id;
          let result = { id: id, ...data }
          setAnimals((animals) => [...animals, result])
          setStatus(200)
        })
      }
      getAnimals()
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }, [])

  return (
    <>
      {status === 200 ? (
        animals.map((animal, index) => {
          return (
            <Card animal={animal} key={index} />
          )
        })
      ) : (
        <Loading />
      )
      }
    </>
  )
}
