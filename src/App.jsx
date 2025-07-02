import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx' 
//import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx'
//import AboutTheSitePage from "./pages/AboutTheSitePage/AboutTheSitePage.jsx"
import Footer from './components/Footer/Footer.jsx'
import AppRoutes from './routes.jsx'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  )

}

export default App
