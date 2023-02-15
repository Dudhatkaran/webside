import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Website/About/About';
import Home from './Website/Dashbord/Dashbord';
import Footer from './Website/Footer/Footer';
import Nevbar from './Website/Nevbar/Nevbar';
import Project from './Website/Project/Project';
import Whatwedo from './Website/Whatwedo/Whatwedo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/nevbar' element={ <Nevbar /> } />
          <Route path='/whatwedo' element={ <Whatwedo /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/project' element={ <Project /> } />
          <Route path='/footer' element={ <Footer /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
