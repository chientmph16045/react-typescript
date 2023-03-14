import { useState } from 'react'
import { Routes, Route, Router } from "react-router-dom"
import Add from './compenents/add'
import Update from './compenents/update'
import Layout from './layoutpage/layoutPage/layout'
import LayoutAdmin from './layoutpage/layoutAdmin/layoutAdmin'
import Admin from './page/admin/admin'
import Home from './page/home/home'
import Products from './page/product/products'
import Detail from './page/detail/detail'
import RequierAuth from './layoutpage/RequireAuth/RequierAuth'
import Signup from './page/login/signup'
import Signin from './page/login/signin'
import CartPage from './page/cart/cart'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/signin' element ={<Signin/>}/>
        <Route path='/admin' element={
          <RequierAuth>
            <LayoutAdmin />
          </RequierAuth>
        }>
          <Route index element={<Admin/>} />
          <Route path='add' element={<Add />} />
          <Route path='/admin/update/:id' element={<Update />} />
        </Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </>
  )
}

export default App
 