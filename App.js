import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tasks/>
      <Home/>
    </div>
  );
}

export default App;
