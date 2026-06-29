import { useState } from "react";
function Percentage() {
    const [marks, setMarks] = useState(0);
    return (
        <div>
            <h2>Percentage Calculator</h2>
            <input
            type="number"
            placholder="Marks out of 500"
            onChange={(e) =>
    setMarks(e.target.value)}            
            />
            <h3>Percentage: {(marks / 500) * 100}%</h3>
        </div>
    );
}
export default Percentage;