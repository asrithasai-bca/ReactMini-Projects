import { useState } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState("");

  return (
    <div>
      <h2>Temperature Converter</h2>

      <input
        type="number"
        placeholder="Enter Celsius"
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h3>
        Fahrenheit: {(celsius * 9) / 5 + 32}
      </h3>
    </div>
  );
}

export default Temperature;