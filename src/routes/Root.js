import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Show } from './animals/Show'
import { NotFound } from './NotFound'
import { Index } from './animals/Index'
import { New } from './animals/New'
import { Edit } from './animals/Edit'
import { About } from './About'
import { Login } from '../components/Login'
import { auth } from '../firebase'

export const Root = () => {
  const [user, setUser] = useState(false)

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user)
    } else {
      setUser(false)
    }
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout user={user} />}>
            <Route index element={<Index />}></Route>
            <Route path='/login' element={<Login user={user} />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/animals/:id' element={<Show user={user} />}></Route>
            <Route path='/animals/new' element={user ? <New /> : <NotFound />}></Route>
            <Route path='/animals/:id/edit' element={user ? <Edit /> : <NotFound />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
