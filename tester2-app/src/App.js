import logo from './logo.svg';
import './App.css';
import Screen from './components/Screen/Screen.js';
import Wrapper from './components/Wrapper/Wrapper';
import ButtonBox from './components/ButtonBox/ButtonBox';
import Button from './components/Button/Button';
import React, {useState} from 'react';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  let[calc, setCalc] = useState ({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if(calc.num.length< 16){
      setCalc({
        ...calc,
        num:
         calc.num === 0 && value === "0"
         ? "0"
         : calc.num === 0 && value === "0"
         ? Number(calc.num + value)
         : calc.num + value,
         res: !calc.sign ? 0: calc.res,
      });
    }
  };

  return (
  <Wrapper>
      <Screen value = {calc.num ? calc.num : calc.res}/>
      <ButtonBox>
        {
          btnValues.flat().map((btn,i) => {
            return(
              <Button key = {i}
                className={btn === "= "? "equals" : ""}
                value = {btn}
                onClick={() =>{
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }}
              />
            );
          })
        }
      </ButtonBox>
  </Wrapper>    
  );
}

export default App;
