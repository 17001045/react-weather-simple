import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWeatherDataAction, setSectionActiveAction } from "../redux/actions";
import { navData } from "../common/navData";
import { citiesChile } from "../common/citiesChile";
import { WeatherController } from "../weather/WeatherController";

const WeatherForm = () => {
  const _weatherController = new WeatherController();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    city: "",
  });
  const onChangeForm = (el) => {
    const { name, value } = el;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const getWeatherMap = async (e) => {
    e.preventDefault();
    const data = await _weatherController.getWeather(formValues.city);

    dispatch(setWeatherDataAction(data));
    dispatch(setSectionActiveAction(navData[1].label));
  };
  return (
    <div className="b-get-weather">
      <form onSubmit={(e) => getWeatherMap(e)}>
        <div className="b-get-weather__input-control">
          <input
            className="b-get-weather__input"
            value={formValues.city}
            type="text"
            name="city"
            placeholder="nombre de tu ciudad"
            onChange={(e) => onChangeForm(e.target)}
            list="cityname"
            required
            minLength="3"
          />
          <datalist id="cityname">
            {citiesChile.map((c, i) => (
              <option key={i} value={c}></option>
            ))}
          </datalist>
          <button className="b-get-weather__submit" type="submit">
            <ion-icon name="cloudy-outline"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
