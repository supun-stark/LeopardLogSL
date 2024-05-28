import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import Leopards from './pages/Leopards'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import LeopardsSrilanka from './pages/LeopardsSrilanka'
import Gallery from './pages/Gallery'
import CreateLeopard from './pages/CreateLeopard'
import UpdateLeopard from './pages/UpdateLeopard'
import Yala from './pages/Yala'
import Wilpattu from './pages/Wilpattu'
import Hortonplains from './pages/Hortonplains'
import {Toaster} from 'react-hot-toast'
import Login from './pages/Login'
import Layout from './components/Layout'
import Signup from './pages/Signup'
import { UserProvider } from './context/UserContext'
import { LeopardProvider } from './context/LeopardContext'
import Footer from './components/Footer'


function App() {

  return (
    <LeopardProvider>
    <UserProvider>
      <BrowserRouter>
      <Layout>
      <Toaster position="top-right" reverseOrder={false}/>
        <Routes>
          {/* <Route index element={<DashBoard/>}></Route> */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}></Route> 
          <Route path='/leopards' element={<Leopards/>}></Route>
          <Route path='/home' element={<Home/>}></Route> 
          <Route path='/about' element={<About/>}></Route> 
          <Route path='/srilanka' element={<LeopardsSrilanka/>}></Route> 
          <Route path='/gallery' element={<Gallery/>}></Route> 
          <Route path='/leopards/add' element={<CreateLeopard/>}></Route> 
          <Route path='/leopard/update/:id' element={<UpdateLeopard/>}></Route>
          <Route path='/home/yala' element={<Yala/>}></Route> 
          <Route path='/home/wilpattu' element={<Wilpattu/>}></Route> 
          <Route path='/home/hortonplains' element={<Hortonplains/>}></Route> 

          {/* Unmatched routes also redirect to the login page */}
          <Route path="*" element={<Navigate to="/login" />} /> 
        </Routes>
        </Layout>
      </BrowserRouter>
      <Footer/>
    </UserProvider>
    </LeopardProvider>
  )
}

export default App
