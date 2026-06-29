import React, {useState} from 'react';
function Quote() {
    const quotes=[
        "Dream Big",
        "Never Give up",
        "Work hard"
    ];
    const [quote,setQuote]=useState("");
    return(
        <div>
        <h2>Quote Generator</h2>
        <button
        onClick={()=>
            setQuote(
                quotes[
                    Math.floor(Math.random()*quotes.length)
                ]
            )
        }
        >
        Generate Quote
        </button>
        <h3>{quote}</h3>
        </div>
    ); 
    }
export default Quote;