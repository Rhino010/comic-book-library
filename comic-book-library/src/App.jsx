import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import BrowseCharacters from './components/BrowseCharacters'
import Comics from './components/Comics'
import NotFound from './components/NotFound'
import CharacterDetails from './components/CharacterDetails'
import Home from './components/Home'
import mockMarvelAPI from './components/mockData'

function App() {
      const marvelData = mockMarvelAPI.data;

  return (
    <>
      <div className='app-container'>
        <NavigationBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/comics' element={<Comics marvelData={marvelData}/>} />
              <Route path='/character-details/:id' element={<CharacterDetails marvelData={marvelData}/>} />
              <Route path='/browse-characters' element={<BrowseCharacters marvelData={marvelData}/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </div>
     </>
  )
}

export default App
