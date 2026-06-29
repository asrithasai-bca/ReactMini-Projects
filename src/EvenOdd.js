import { useState } from "react";
function EvenOdd() {
    const [num, setNum] = useState("");
        return (
            <div>
                <h2>Even odd Checker</h2>
                <input
                type="number"
                onChange={(e) =>
        setNum(e.target.value)}
        />            
        <h3>
            {num && num % 2 === 0 ? "Even Number" : "Odd Number"}
        </h3>
            </div>
    );
}
export default EvenOdd;