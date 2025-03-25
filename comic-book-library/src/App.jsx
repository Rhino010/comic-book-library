import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import BrowseCharacters from './components/BrowseCharacters'
import Comics from './components/Comics'
import NotFound from './components/NotFound'
import CharacterDetails from './components/CharacterDetails'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className='app-container'>
        <NavigationBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/comics' element={<Comics />} />
              <Route path='/character-details' element={<CharacterDetails />} />
              <Route path='/browse-characters' element={<BrowseCharacters />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </div>
     </>
  )
}

export default App
