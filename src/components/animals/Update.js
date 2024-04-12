import React, { useState } from 'react'
import api from '../../animalsMock'
import { Form } from '../../routes/animals/Form'
import { useNavigate, useParams } from 'react-router-dom'

export const Update = () => {
  const { id } = useParams('id')
  const animal = api[id]
  const [animalName, setAnimalName] = useState(animal.name)
  const [photo, setPhoto] = useState(animal.photo)
  const [description, setDescription] = useState(animal.description)
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
    e.preventDefault()
    alert(`${animal.name} updated!`)
    navigate(`/animals/${animal.id}`)
  }
  return (
    <Form animal={animal} handleInput={handleInput} handleSubmit={handleSubmit}/>
  )
}
