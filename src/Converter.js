import { useState } from "react";
function Converter() {
    const [text, setText] = useState("");
    return (
        <div>
            <h2>Case Converter</h2>
            <input
            type="text"
            onChange={(e) =>
    setText(e.target.value)}            
            />
            <h3>{text.toUpperCase()}</h3>
        </div>
    );
}
export default Converter;