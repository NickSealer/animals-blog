import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({ animal, handleInput, handleSubmit }) => {
  return (
    <>
      <form onSubmit={e => handleSubmit(e)} id='animal-form' style={{ maxWidth: 920, margin: 'auto' }}>
        <div className='mb-3'>
          <label htmlFor='animal[name]' className='form-label'>Name</label>
          <input onChange={e => handleInput(e, 'name')} type='text' className='form-control' id='animal[name]' defaultValue={animal?.name} required={true} placeholder='Cat'></input>
        </div>
        <div className='mb-3'>
          <label htmlFor='animal[photo]' className='form-label'>Photo URL</label>
          <input onChange={e => handleInput(e, 'photo')} className='form-control' id='animal[photo]' type='text' required={true} defaultValue={animal?.photo} placeholder='https://www.cat-photo.com'></input>
        </div>
        {
          animal?.photo ? (
            <img src={animal.photo} className='rounded mx-auto d-block' style={{ maxWidth: 150 }} alt={animal.name} />
          ) : (
            <img src='../../../favicon.png' className='rounded mx-auto d-block' style={{ maxWidth: 150 }} alt='default' />
          )
        }
        <div className='mb-3'>
          <label htmlFor='animal[description]' className='form-label'>Description</label>
          <textarea onChange={e => handleInput(e, 'description')} rows={10} className='form-control' id='animal[description]' defaultValue={animal?.description} required={true}></textarea>
        </div>
        <div className='mb-3 text-center'>
          {animal ?
            <Link to={`/animals/${animal.id}`} className='btn btn-outline-primary' style={{ marginRight: 10 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </Link> : ''}
          <button type='submit' className='btn btn-outline-success'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
              <path d="M11 2H9v3h2z" />
              <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}
