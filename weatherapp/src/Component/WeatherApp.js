import { useState } from 'react'
function WeatherApp() {

    const [open , setOpen] = useState(false)
    const [weatherData, setWeatherData] = useState({
        temperature: '',
        humidity: '',
        windSpeed: '',
        description: ''
    });

    const fetchWeatherData = async (cityName) => {
        const API_KEY = 'fc9784d55049785e6fe381c9c004c332';
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)

        setWeatherData({
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var cityName = event.target.elements.cityName.value;
        console.log(cityName)
        fetchWeatherData(cityName);
    }
    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <form className="space-x-4 " onSubmit={handleSubmit}>
                <label htmlFor="cityName">Enter city name: </label>
                <input className="bg-gray-50 rounded-s border border-gray-300" type="text" name="cityName" id="cityName" required />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600" 
                type="submit" onClick={()=>setOpen(true)}>Search</button>
            </form>
            

           {
            !open ? null : (
                <div className="weather-info">
                <p>Temperature: {weatherData.temperature} &deg;C</p>
                <p>Humidity: {weatherData.humidity} %</p>
                <p>Wind Speed: {weatherData.windSpeed} m/s</p>
                <p>Description: {weatherData.description}</p>
            </div>
            )
           }

        </div>
    );
}

export default WeatherApp;
