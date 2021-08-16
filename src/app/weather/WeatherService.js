import { WEATHER_KEY } from "../../config/keys";

export class WeatherService {
  async getData(city) {
    return await fetch(this.getAPIURL(city));
  }

  getAPIURL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
  }
}
