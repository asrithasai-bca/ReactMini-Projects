import React, { useState } from 'react';
function Calculator() {
    const [a,setA]=useState('');
    const [b,setB]=useState('');
    const [result,setResult]=useState(0);
    return(
        <div>
            <h2>Calculator</h2>
            <input
            type="number"
            onChange={(e)=>setA(e.target.value)}
            />
            <input
            type="number"
            onChange={(e)=>setB(e.target.value)}
            />
            <button
            onClick={()=>setResult(Number(a)
           +Number(b))}
           >
            Add
           </button>
           <h3>Result : {result}</h3>
        </div>
    );
}
export default Calculator;