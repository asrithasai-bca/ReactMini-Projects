import { useState } from 'react';
function Color() {
    const [color, setColor] = 
   useState('Pink');
   return (
    <div style={{ background: color, padding: "20px"}}>
    <h2>Color Changer</h2>
    <button onClick={() =>
   setColor("red")}>Red</button>
   <button onClick={() =>
   setColor("green")}>Green</button>
   <button onClick={() =>
    setColor("yellow")}>Yellow</button>
    </div>
   ); 
}
export default Color;