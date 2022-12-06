import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar';
import Details from './views/details/details';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <header className="App-header position-sticky top-0 bg-light border">
        <Navbar/>
      </header>
      
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
