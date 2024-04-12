import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ animal }) => {
  const limitDescription = (description) => {
    return description.substring(0, 500)
  }

  return (
    <div key={animal.id} className="card border-info mb-3">
      <div className="card-header">{animal.name}</div>
      <div className="card-body">
        <p className="card-text">
          {`${limitDescription(animal.description)}... `}
          <Link to={`/animals/${animal.id}`}>More</Link>
        </p>
      </div>
    </div>
  )
}
