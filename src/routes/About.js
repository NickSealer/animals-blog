import axios from 'axios'
import React, { useReducer, useState } from 'react'

export const About = () => {
  const [imageUrl, setImageUrl] = useState('')
  

  const getRandomImage = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=animal`)
      if (response.status === 200) {
        setImageUrl(response.data.data.images.original.url)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [number, setNumber] = useState()

  const [state, dispach] = useReducer((state, action) => {
    switch (action.type) {
      case 'addition':
        return state + number;
      case 'subtraction':
        return state - number;
      case 'division':
        return state / number;
      case 'multiplication':
        return state * number;
      case 'reset':
        return state = 0;
      default:
        break;
    }
    return state;
  }, 0)

  const handleValue = (e) => setNumber(Number(e.target.value))

  const addition = () => dispach({type: 'addition'})
  const subtraction = () => dispach({type: 'subtraction'})
  const multiplication = () => dispach({type: 'multiplication'})
  const division = () => dispach({type: 'division'})
  const reset = () => dispach({type: 'reset'})

  const [color, dispachColor] = useReducer((color, action) => {
    switch (action.type) {
      case 'red':
        return color = 'red';
      case 'yellow':
        return color = 'yellow';
      case 'green':
        return color = 'green';
      case 'reset':
        return color = 'wheat';
      default:
        break;
    }
    return color;
  }, 'wheat')

  const resetColor = () => dispachColor({type: 'reset'})
  const red = () => dispachColor({type: 'red'})
  const yellow = () => dispachColor({type: 'yellow'})
  const green = () => dispachColor({type: 'green'})

  return (
    <div className='container text-center mt-5'>
      <img src='https://media.tenor.com/bnG9NZdIQe4AAAAj/pudgy-pudgypenguin.gif' alt='build-1'></img>
      <img src='https://media3.giphy.com/media/dXr0rbo8j6Yhwivo8f/200w.gif?cid=6c09b952lkxhrn47rigadu1fhoc5tdv29wck2q31s4qqr9i2&ep=v1_gifs_search&rid=200w.gif&ct=g' alt='build-2'></img>
      <br></br><br></br>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XHrskkHf958?si=FLhBFoCsyfcr0cau" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <br></br><br></br>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31815.737579484598!2d-74.21498630000004!3d4.5998985000000125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1713392493274!5m2!1sen!2sco" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <br></br><br></br>
      <div style={{display: 'inline-grid'}} className='mb-5'>
        <button onClick={getRandomImage} className='btn btn-outline-primary mb-3' type='button' >Get Random Image</button>
        <img src={imageUrl}></img>
      </div>

      
      <div className='mt-5 mb-5 text-center container'>
        <h1>Calculator</h1>
        <div>{state}</div>
        <input onChange={e => handleValue(e)} type='number' defaultValue={number}/>
        <div id='actions' className='mb-5 mt-3'>
          <button onClick={addition} className='btn btn-outline-dark'>+</button>
          <button onClick={subtraction} className='btn btn-outline-dark'>-</button>
          <button onClick={division} className='btn btn-outline-dark'>/</button>
          <button onClick={multiplication} className='btn btn-outline-dark'>*</button><br></br><br></br>
          <button onClick={reset} className='btn btn-outline-dark'>Reset</button>
        </div>
      </div>

      <div className='mt-5 mb-5 container text-center'>
        <h1>Traffic light</h1>
        <div style={{width: 80, height: 80, borderRadius: 50, margin: 'auto', backgroundColor: color}}></div>
        <div className='mt-2 mb-5'>
          <button onClick={red} className='btn btn-danger'>STOP</button>
          <button onClick={yellow} className='btn btn-warning'>READY</button>
          <button onClick={green} className='btn btn-success'>GO!!!</button>
          <button onClick={resetColor} className='btn btn-light'>Reset</button>
        </div>
      </div>
    </div>
  )
}
