import { useState } from 'react';
import './App.css';
import { Button } from './CalculatorComponents/button';
import { Input } from './CalculatorComponents/input';
// import * as math from 'mathjs';
import { evaluate } from 'mathjs';


function App() {

  const [result,setResult] = useState(0);  //result
  const [equation,setEquation] = useState(0); //equation
 
  if(equation===0){
    setEquation('');
  }
  //add the initial value in input with to an array and other values from the keyboard rather than replacing them.
  const buttonInput = (val)=>{
    setEquation((equation)=>{
      return [...equation,val]
    })
  }

  //clear both the equation and result by returning them to 0
  const clear =()=>{
    setEquation(0);
    setResult(0)
  }

  //split the value of equation to form an array then use the math library (evaluate) to get the answer
  const solve =()=>{
    const input = equation.join('');
    setResult(evaluate(input));
  }
  
  return (
    <div className="App">
      <div className='calcWrapper'>
        <Input Equation={equation}  Result={result}/>
        <Button handleClick={buttonInput} clear={clear} equate={solve}/>
        <footer><strong>&copy; Designed by Temz</strong></footer>
      </div>
      
    </div>
  );
}

export default App;
