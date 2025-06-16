import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx' 
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ProjectsPage />
    </>
  )
}

export default App
