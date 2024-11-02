import { useState } from "react";
import axios from 'axios';
import '../src/components/style.css'






function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const KEY = '9a61f229741aa856d43699768e4fe3da';

  const getWeather = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`)
      .then(({ data }) => {
        const allForecasts = data.list;
        const dailyForecasts = allForecasts.filter(forecast =>
          forecast.dt_txt.includes('12:00:00')
        ).slice(0, 4);
        setData(dailyForecasts);
        console.log(dailyForecasts);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных о погоде:', error);
        setData([]);
      });
  };

  return (
    <div className="kvadrat">
    <div className="block">

   
      
      <input id= 'input1'type="text" placeholder="Введите страну" onChange={(event) => {
          setCity(event.target.value);
        }} />
      <button id="btn" type="submit" onClick={() => getWeather(city)}>Поиск</button>
      {data.length > 0 && (

        <div>
          {
          data.map((forecast, index) => (
            <div key={index}>
              <h3 className="data">дата: {forecast.dt_txt.split('')[0]}</h3>
              <h1 className="temp"> {forecast.main.temp}°C</h1>
              <h3 className="pogoda"> {forecast.weather[0]?.main}</h3><hr/>
            </div>
          ))
          }
        </div>
      )}
    </div>
    </div>
  );
  
}
export default App;

