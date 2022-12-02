import './App.css';
import Navbar from './components/navbar';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <header className="App-header border">
        <Navbar/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
