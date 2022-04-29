import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Blogs from './components/pages/blogs';
import SignUp from './components/pages/signup';
import Contact from './components/pages/contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path = '/' exact element={<Home/>}/>
          <Route exact path = '/about' exact element={<About/>}/>
          <Route exact path = '/contact' exact element={<Contact/>}/>
          <Route exact path = '/blogs' exact element={<Blogs/>}/>
          <Route exact path = '/sign-up' exact element={<SignUp/>}/>
          
      </Routes>
    </Router>
  );
}

export default App;
