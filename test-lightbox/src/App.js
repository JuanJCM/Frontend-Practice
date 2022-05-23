import logo from "./logo.svg";
import "./App.css";
import beach from "../src/images/beach.jpeg";
import Modal from "./Modal";
import { useState } from "react";
function App() {
  const[hideLightbox, $setHideLightbox] = useState(true);
  const runVideo = () => {
    console.log("Se esta llamando la funcion");

  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="playVideo">
          <img
            className="beach"
            alt="beach"
            src={beach}
            onClick={()=> {$setHideLightbox(false)}}
          />
        </div>
        <div className={`videocontainer ${hideLightbox? "hide-videocontainer":" " }`} onClick={() => {$setHideLightbox(true)}}>
          <iframe
            src="https://youtube.com/embed/dQw4w9WgXcQ"
            className="video"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
