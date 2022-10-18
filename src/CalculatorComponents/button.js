import React from 'react';
import {useSelector} from 'react-redux';
import './button.css';

export const Button =({handleClick, clear, equate})=>{
    const selector = useSelector((state)=>state.calculate.map(loop=>loop));
  return (
    <div className='buttons'>

        <div className='left'>
          <input type='button' id='clear' className='check' value='AC' datatype='operator' onClick={()=>clear()}/>
          <input type='button' id='percent' className='check' value='%' datatype='operator' onClick={()=>handleClick('%')}/>
    
          {selector.map(i=>{
            return <input type='button'
              key={i.value}
              id={i.id}
              className='check operands'
              datatype='operand'
              onClick={()=>handleClick(i.value)}
              value={i.value}
            />
          })}
        </div>

        <div className='right'>
          <input type='button' id='divide' className='check operate' value='/' datatype='operator' onClick={()=>handleClick('/')}/>
          <input type='button' id='multiply' className='check operate' value='*' datatype='operator'onClick={()=>handleClick('*')}/>
          <input type='button' id='minus' className='check operate' value='-' datatype='operator' onClick={()=>handleClick('-')}/>
          <input type='button' id='plus' className='check operate' value='+' datatype='operator' onClick={()=>handleClick('+')}/>
          <input type='button' id='equals' className='check operate' value='=' datatype='operator' onClick={()=>equate()}/>
        </div>

    </div> 
  )
}
