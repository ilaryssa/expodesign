import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
// import Footer from './components/Footer/Footer.jsx';
import AppRoutes from './routes.jsx';
import { AuthProvider } from "./contexts/AuthContext/AuthContext"

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>

            <AppRoutes />

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;