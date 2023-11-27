import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CreateNote from './pages/CreateNotes/CreateNotes'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="cnote" element={<CreateNotes />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
