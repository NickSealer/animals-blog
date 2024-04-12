import React, { useState } from 'react'
import { Form } from '../../routes/animals/Form'
import { useNavigate } from 'react-router-dom'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnimal = {name: animalName, photo: photo, description: description}
    alert(`${newAnimal.name} added!`);
    navigate('/')
  }

  return (
    <Form handleInput={handleInput} handleSubmit={handleSubmit} />
  )
}
