import { useState } from "react";
function Table() {
    const [num, setNum] = useState("");
    return (
        <div>
            <h2>Multipication Table</h2>
            <input
            type="number"
            value={num}
            onChange={(e) =>
    setNum(Number(e.target.value))}            
            />
            <p>{num} * 1 = {num * 1}</p>
            <p>{num} * 2 = {num * 2}</p>
            <p>{num} * 3 = {num * 3}</p>
            <p>{num} * 4 = {num * 4}</p>
            <p>{num} * 5 = {num * 5}</p>
            <p>{num} * 6 = {num * 6}</p>
            <p>{num} * 7 = {num * 7}</p>
            <p>{num} * 8 = {num * 8}</p>
            <p>{num} * 9 = {num * 9}</p>
            <p>{num} * 10 = {num * 10}</p>
        </div>
    );
}
export default Table;