import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Show } from './animals/Show'
import { NotFound } from './NotFound'
import { Index } from './animals/Index'
import { New } from './animals/New'
import { Edit } from './animals/Edit'
import { About } from './About'

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/animals/:id' element={<Show />}></Route>
            <Route path='/animals/new' element={<New />}></Route>
            <Route path='/animals/:id/edit' element={<Edit />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
