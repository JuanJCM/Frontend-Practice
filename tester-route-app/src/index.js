import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {
        Navigation,
        Footer,
        Home, 
        About,
        Contact,
        Blog,
        Posts,
        Post,
      } from "../src/components"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        <Route path ="/blog" element ={<Blog/>}/>
        <Route path ="" element ={<Posts/>}/>
        <Route path =":postSlug" element ={<Post/>}/>
                
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
