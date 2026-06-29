import { useState } from "react";
function Voting() {
    const [age, setAge] = useState("");
    return (
        <div>
        <h2>Voting Checker</h2>
        <input
        type="number"
        placholder="Enter Age"
        onChange={(e) =>
    setAge(e.target.value)}
    />
    <h3>
    {age >= 18
        ? "Eligible to Vote"
        : "Not Eligible"}
    </h3>
        </div>
    );
}
export default Voting;