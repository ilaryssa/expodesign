import './App.css';
import { AuthProvider } from "./contexts/AuthContext/AuthContext"
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes.jsx';

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