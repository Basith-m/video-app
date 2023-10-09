import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import History from './Pages/History';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return ( 
    <div className="App">
      
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/History' element={<History />} />
      </Routes>
      <hr />
      <Footer />

    </div>
  );
}

export default App;
