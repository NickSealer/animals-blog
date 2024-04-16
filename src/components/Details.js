import React from 'react'
import { Link } from 'react-router-dom'

export const Details = ({ animal, user }) => {
  let description = animal.description.split('\n').map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  })

  return (
    <div className='details'>
      <div className='details-header'>
        <h1>{animal.name}</h1>
      </div>
      <div className='details-body'>
        {description}
      </div>
      <div className='details-footer'>
        <img src={animal.photo} alt={animal.name} ></img>
        <br></br><br></br>
        <Link to='/' className='btn btn-outline-primary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </Link>
        {user &&
          <Link to={`/animals/${animal.id}/edit`} className='btn btn-outline-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </Link>
        }
      </div>
    </div>
  )
}
