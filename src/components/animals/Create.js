import React, { useState } from 'react'
import { Form } from '../../routes/animals/Form'
import { useNavigate } from 'react-router-dom'
import db from '../../firebase'

export const Create = () => {
  const [animalName, setAnimalName] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const navigate = useNavigate()

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

  const createAnimal = async (e) => {
    e.preventDefault();
    let animal = { name: animalName, photo, description }

    try {
      const response = await db.collection('animals').add(animal)
      if (response.id !== undefined) {
        alert(`${animal.animalName} with id: ${response.id} added!`);
        navigate(`/animals/${response.id}`)
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }

  return (
    <Form handleInput={handleInput} handleSubmit={createAnimal} />
  )
}
