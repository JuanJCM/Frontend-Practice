import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>This is a variable example</h1>

    <div id='nested'>
      <h3>
        This is a nested rules example
      </h3>
    </div>
    <p className='interpolation'>interpolation Example.</p>
    <div id="function">
      <h3>
        This is a function example
      </h3>
    </div>
    <div id='mixin'>
      <p>This is mixin Example</p>
    </div>
    <div className="image">
      <p>Esto es un ejemplo de imagen</p>
      
    </div>
  </>
  );
}

export default App;
