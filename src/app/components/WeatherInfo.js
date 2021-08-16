import React from "react";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const weatherData = useSelector((state) => state.weatherData);

  return (
    <div className="b-info-weather">
      <div className="b-info-weather__content">
        <div className="b-info-weather__temperature">
          <h1>{Math.floor(weatherData.temperature)}</h1>
          <span>°C</span>
        </div>
        <div className="divider"></div>
        <div className="b-info-weather__footer">
          <p>humedad: {weatherData.humidity}%</p>
          <p>
            ciudad: {weatherData.city}, país: {weatherData.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
