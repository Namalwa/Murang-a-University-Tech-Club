import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Leadership from './Pages/Leadership/Leadership'
import Track from './Pages/Track/Track'
import Events from './Pages/Events/Events'
import Registration from './Pages/Track/Registration';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Leadership' element={<Leadership/>}/>
      <Route path='/Track' element={<Track/>}/>
      <Route path='/Events' element={<Events/>}/>
      <Route path="/registration" element={<Registration />} />

    </Routes>
    </BrowserRouter>
    <Footer/>
     </>
    
  )
}
export default App;
