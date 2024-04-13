
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Questionnaire from './pages/Questionnaire'
import MovieSearch from './pages/MovieSearch'
import MovieResult from './pages/MovieResult'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header />
<main>
  
        <Routes>
          <Route path='/' element={<Questionnaire />} />
          <Route path='/movie-search' element={<MovieSearch />} />
          <Route path='/result' element={<MovieResult />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
</main>
    </>
  )
}

export default App
