import React from 'react'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login'

function Home() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Home