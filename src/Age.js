import { useState } from 'react';
function Age() {
    const [year, setYear] = useState('');
    const age = year ? new
    Date().getFullYear() - year : "";
    return(
        <div>
            <h2>Age</h2>
            <input
            type="number"
            placeholder="Birth Year"
            onChange={(e) =>
    setYear(e.target.value)}            
           />
           <h3>Your Age: {age}</h3>
        </div>
    );
}
export default Age;