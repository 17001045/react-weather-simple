export const actionTypes = {
  SET_WEATHER_DATA: "SET_WEATHER_DATA",
  SET_SECTION_ACTIVE: "SET_SECTION_ACTIVE",
};

export const setWeatherDataAction = (data) => ({
  type: actionTypes.SET_WEATHER_DATA,
  payload: data,
});

export const setSectionActiveAction = (label) => ({
  type: actionTypes.SET_SECTION_ACTIVE,
  payload: label,
});
