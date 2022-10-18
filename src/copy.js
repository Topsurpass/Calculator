import React from 'react';
import './calculator.css';
import { useState } from 'react';
import {useSelector} from 'react-redux';

export const  Calculator=()=> {
  const selector = useSelector((state)=>state.calculate.map(loop=>loop));

  const [input, setInput] = useState(0);

  const handleKeyPress = (digits)=>{ 

    const buttons = document.getElementById(digits).value;
    const inputedValue =  document.getElementById('inputIt').value;
    const regex = /^0/g;
    const regex2 =  /[^.\w]/g;
    const replaceZero = inputedValue.replace(regex,'');
    const text = replaceZero.concat(buttons);

    setInput(text);
    if(inputedValue.includes('.')){
      setInput(inputedValue + buttons.replace(".",""));
    }
    
    const matchRegex2 = text.match(regex2);
    const matchArr2 = matchRegex2[1];
    const splitText = text.split(matchRegex2); 
  
   if (matchRegex2===null || (splitText[1] !=='' && matchRegex2.length === 2)){
      const a = input.split(matchRegex2[0]);
      const equation = (match)=>{
        switch (match) {
          case '*' :
            setInput((a.reduce((a,b)=>parseFloat(a) * parseFloat(b))) + matchArr2);
            break;
          case '+' :
            setInput((a.reduce((a,b)=>parseFloat(a) + parseFloat(b))) + matchArr2);
            break;
          case '-' :
            setInput((a.reduce((a,b)=>parseFloat(a) - parseFloat(b))) + matchArr2);
          break;
          case '/' :
            setInput((a.reduce((a,b)=>parseFloat(a) / parseFloat(b))) + matchArr2);
          break;
          default:
            setInput(text)
          break;
        }
       }
       return equation(matchRegex2[0]) 
    }
   
  }

  const equalsTo = () => {
    const regex2 =  /[^.\w]/g;
    const inputedValue =  document.getElementById('inputIt').value;
    const matchSigns = inputedValue.match(regex2);
    let arr = inputedValue.split(regex2);

     const equation = (match)=>{
      switch (match) {
        case '*' :
          setInput(arr.reduce((a,b)=>parseFloat(a) * parseFloat(b)));
          break;
        case '+' :
          setInput(arr.reduce((a,b)=>parseFloat(a) + parseFloat(b)));
          break;
        case '-' :
          setInput(arr.reduce((a,b)=>parseFloat(a) - parseFloat(b)));
        break;
        case '/' :
          setInput(arr.reduce((a,b)=>parseFloat(a) / parseFloat(b)));
        break;
        default:
          setInput(inputedValue)
        break;
      }

     }
     return equation(...matchSigns)  
  }
  
   const clear = () =>{
      setInput(0);
   }

  return (
    <div className='container'>
      
      <div className='displayResult'>
        <input  type='text' value={input} className='displayInput' id='inputIt' readOnly/>
      </div>

      <div className='buttons'>
        <input type='button' id='clear' className='check' value='AC' onClick={clear}/>
        {selector.map(i=>{
          return <input type='button' 
            key={i.value}
            id={i.id}
            className='check'
            onClick={()=>{handleKeyPress(i.id)}} 
            value={i.value}
          />
        })}
        <input type='button' id='equals' className='check' value='=' onClick={equalsTo} />
      </div> 
    </div>
  );
}
/*
.container{
    width:300px;
    height: 480px/;
    background-color: black;
    border: 3px solid grey;
}
.displayResult{
    width:98%;
    height:110px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    color:white;
}
.displayInput{
    margin-left: 5px;
    width: 92%;
    height:50px;
    background-color:black;
    outline: none;
    color:white;
    font-size: 25px;
    border: 0px;
    text-align: right;
}
.check{
    width:70px;
    height: 72px;
    background-color: rgb(100, 100, 94);
    color:white;
    font-size: 20px;
}
.check:hover{
    color: black;
    border: 1px solid white;
}
.buttons{
    display: flex;
    flex-flow: wrap;
    margin-left: 10px;

}
#clear{
    width: 140px;
    background-color: brown;
    color:white;
    font-size: 15px;
}
#zero{
    width: 140px;  
}
#equals{
    height: 145px;
    margin-top: -72px;
    background-color: rgb(101, 69, 131);
}

*/