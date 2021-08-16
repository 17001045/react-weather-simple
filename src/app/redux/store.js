import { createStore } from "redux";
import { actionTypes } from "./actions";
import { navData } from "../common/navData";

const initialState = {
  weatherData: {
    city: "",
    country: "",
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    error: null,
    ok: false,
  },
  sectionActive: navData[0].label,
};

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: {
          city: action.payload.name,
          country: action.payload.sys.country,
          temperature: action.payload.main.temp,
          description: action.payload.weather[0].description,
          humidity: action.payload.main.humidity,
          wind_speed: action.payload.wind.speed,
          error: null,
          ok: true,
        },
      };
    case actionTypes.SET_SECTION_ACTIVE:
      return {
        ...state,
        sectionActive: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(reducerApp);
