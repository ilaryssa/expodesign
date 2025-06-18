import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx' 
import ProjectsPage from './pages/ProjectsPage.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default App
