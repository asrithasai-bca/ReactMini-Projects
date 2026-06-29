import React, { useState } from 'react';
function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const getWeather = () => {
        setWeather( {
            city: city,
            temperature: "32.C",
            condtion: "Sunny"
        });
    };
    return (
        <div>
            <h2>Weather App</h2>
            <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) =>
     setCity(e.target.value)}           
            />
            <button onClick={getWeather}>
                Get Weather
            </button>
            {weather && (
               <div>
                <h3>City:  {weather.city}</h3>
                <h3>Temperature:
                    {weather.temperature}
                </h3>
                <h3>Condition:
                    {weather.condition}
                </h3>
                </div>
            )}
        </div>
    );
}
export default Weather;