import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputvalue,setInputValue]=useState(0)
  return (
    <section>
        <div><h1>{state.count}</h1></div>
        <br />
        <div>
            <button onClick={()=>dispatch({type:"+"})}>+</button>
            <button onClick={()=>dispatch({type:"-"})}>-</button>
        </div>
        <div>
            <input type="text" value={inputvalue} onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
        <br />
        <div>
            <button onClick={()=>dispatch({type:"+no",payload:Number(inputvalue)})}>+ with num</button>
            <button onClick={()=>dispatch({type:"-no",payload:Number(inputvalue)})}>- with num</button>
        </div>
    </section>
  );
};

export default Counter;
