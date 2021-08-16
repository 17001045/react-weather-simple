import { WeatherService } from "./WeatherService";
import { Sweetalert2, SW_icons } from "../libs/Sweetalert2";

export class WeatherController {
  constructor() {
    this._weatherService = new WeatherService();
  }
  async getWeather(city) {
    const response = await this._weatherService.getData(city);

    if (response.ok) {
      return await response.json();
    } else {
      return Sweetalert2.alert({
        icon: SW_icons.ERROR,
        title: "ciudad incorrecta",
        text: response.statusText,
      });
    }
  }
}
