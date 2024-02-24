import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact'; 
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        {/* <Route path='/testinomial' element={<h1>Testimonial</h1>} /> */}
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
