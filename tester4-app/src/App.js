import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserForm from './components/UserForm';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className = "container">
        <Routes>
          <Route component = {UserForm} path="/" exact = {true}/>
          <Route component = {Details} path = "/details"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
