import { useState } from "react";
function Quiz() {
    const [result, setResult] = useState("");
    return (
        <div>
            <h2>Quiz App</h2>
            <p>React is developed by?</p>
            <button
            onClick={() => setResult("Wrong")}
            >
                Google
            </button>
            <h3>{result}</h3>
        </div>
    );
}
export default Quiz;