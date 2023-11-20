import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
