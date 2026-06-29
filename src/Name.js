import { useState } from 'react';
function Name() {
    const [name, setName] = useState("");
    return (
        <div>
            <h2>Live Name Display</h2>
           <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) =>
    setName(e.target.value)}
    />
    <h3>Hello {name}</h3>        
        </div>
    );
}
export default Name;