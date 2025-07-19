import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
// import Footer from './components/Footer/Footer.jsx';
import AppRoutes from './routes.jsx';

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <main className="content">
          <AppRoutes />
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;