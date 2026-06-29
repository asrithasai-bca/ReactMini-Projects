import { useState } from "react";
function BMI() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const bmi = weight && height ? (weight / ((height / 100) * (height / 100))).toFixed(2): "";
    return (
        <div>
            <h2>BMI Calculator</h2>
            <input
            type="number"
            placholder="Weight (kg)"
            onChange={(e) =>
    setWeight(e.target.value)}
          />
            <input
            type="number"
            placeholder="Height (cm)"
            onChange={(e) =>
    setHeight(e.target.value)}            
            />
            <h3>BMI: {bmi}</h3>
        </div>
    );
}
export default BMI;