import React,{useState} from 'react';
function Theme() {
    const [dark,setDark]=useState(false);
    return(
        <div
        style={{
        background:dark?"orange":"white",
        color:dark?"white":"orange",
        padding:"20px"   
        }}
        >
        <h2>Theme Toggle</h2>
        <button onClick={()=>setDark(!dark)}>
            Toggle Theme
        </button>
        </div>
    );
}
export default Theme;