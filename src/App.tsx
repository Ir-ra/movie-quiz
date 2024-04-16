
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Questionnaire from './pages/Questionnaire'
import MovieSearch from './pages/MovieSearch'
import MovieResult from './pages/MovieResult'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header/Header'
import { ProgressProvider } from './context/ProgressProvider'

function App() {
  return (
    <>
    <ProgressProvider>
      <Header />
      <main>
        <Routes>
          <Route path='/movie-quiz/' element={<Questionnaire />} />
          <Route path='/movie-search' element={<MovieSearch />} />
          <Route path='/result' element={<MovieResult />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      </ProgressProvider>
    </>
  )
}

export default App
