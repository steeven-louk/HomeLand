import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Details from './views/details/details';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <header className="App-header border">
        <Navbar/>
      </header>
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
