import React, { useEffect, useState } from 'react'
import { Form } from '../../routes/animals/Form'
import { useNavigate, useParams } from 'react-router-dom'
import db from '../../firebase'
import { Loading } from '../Loading'

export const Update = () => {
  const { id } = useParams('id')
  const [animal, setAnimal] = useState()
  const [animalName, setAnimalName] = useState(animal?.name)
  const [photo, setPhoto] = useState(animal?.photo)
  const [description, setDescription] = useState(animal?.description)
  const navigate = useNavigate()

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

  const handleInput = (e, inputField) => {
    switch (inputField) {
      case 'name':
        setAnimalName(e.target.value)
        break;
      case 'photo':
        setPhoto(e.target.value)
        break;
      default:
        setDescription(e.target.value)
        break;
    }
  }

  const updateAnimal = async (e) => {
    e.preventDefault()
    let animlaUpdated = {
      name: animalName || animal.name,
      photo: photo || animal.photo,
      description: description || animal.description
    }

    try {
      await db.collection('animals').doc(animal.id).update(animlaUpdated)
      alert(`${animal.name} updated!`)
      navigate(`/animals/${animal.id}`)
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }

  return (
    <>
      {animal ? (
        <Form animal={animal} handleInput={handleInput} handleSubmit={updateAnimal} />
      ) : (
        <Loading />
      )}
    </>
  )
}
