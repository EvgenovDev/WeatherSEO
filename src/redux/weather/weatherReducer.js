import { getDataApi } from "../../api/weatherApi";

const CHANGE_CITY_NAME = "CHANGE_SITY_NAME";
const CHANGE_APIKEY = "CHANGE_APIKEY";
const CHANGE_LOCATION_TIME = "CHANGE_LOCATION_TIME";
const GET_WEEK_DAY = "GET_WEEK_DAY";
const GET_CURRENT_TEMP = "GET_CURRENT_TEMP";
const GET_CURRENT_ICON = "GET_CURRENT_ICON";
const GET_CURRENT_AIR = "GET_CURRENT_AIR";
const GET_CURRENT_CONDITION = "GET_CURRENT_CONDITION";
const GET_DAILY_INFO = "GET_DAILY_INFO";

export const changeCityNameActionCreator = (name) => {
  return {
    type: CHANGE_CITY_NAME,
    city: name,
  };
};

export const changeApiKeyActionCreator = (apiKey) => {
  return {
    type: CHANGE_APIKEY,
    apiKey: apiKey,
  };
};

export const changeLocationTimeActionCreator = (date) => {
  return {
    type: CHANGE_LOCATION_TIME,
    time: `${new Date(date).getHours()}:${new Date(date).getMinutes()}`,
  };
};

export const getWeekDayActionCreator = (date) => {
  return {
    type: GET_WEEK_DAY,
    weekDay: `${new Date(date).getDay()}`,
  };
};

export const getCurrentTempActionCreator = (temp) => {
  return {
    type: GET_CURRENT_TEMP,
    temp: temp,
  };
};

export const getCurrentIconActionCreator = (icon) => {
  return {
    type: GET_CURRENT_ICON,
    icon: icon,
  };
};

export const getCurrentConditionActionCreator = (condition) => {
  return {
    type: GET_CURRENT_CONDITION,
    condition: condition,
  };
};

export const getDailyInfoActionCreator = (daily) => {
  return {
    type: GET_DAILY_INFO,
    daily: daily,
  };
};

export const getCurrentAirActionCreator = (
  precipitationRa,
  precipitationSn,
  humidity,
  wind
) => {
  return {
    type: GET_CURRENT_AIR,
    precipitation: (precipitationRa + precipitationSn) / 2,
    humidity: humidity,
    wind: (wind * 5) / 18,
  };
};

export const getDataWeatherThunkCreator = (apiKey, city) => {
  return (dispatch) => {
    getDataApi(apiKey, city).then((response) => {
      dispatch(changeCityNameActionCreator(city));
      dispatch(changeLocationTimeActionCreator(response.location.localtime));
      dispatch(getWeekDayActionCreator(response.location.localtime));
      dispatch(getCurrentTempActionCreator(response.current.temp_c));
      dispatch(getCurrentIconActionCreator(response.current.condition.icon));
      dispatch(getDailyInfoActionCreator(response.forecast.forecastday));
      dispatch(
        getCurrentAirActionCreator(
          response.forecast.forecastday[0].day.daily_chance_of_rain,
          response.forecast.forecastday[0].day.daily_chance_of_snow,
          response.current.humidity,
          response.current.wind_kph
        )
      );
      dispatch(
        getCurrentConditionActionCreator(response.current.condition.text)
      );
    });
  };
};

const initialState = {
  city: "Togliatti",
  cityList: ["Togliatti", "Moscow", "Peterburg"],
  apiKey: "b0aa577540824b3b8e371718220302",
  url: "http://api.weatherapi.com/v1/forecast.json?key=b0aa577540824b3b8e371718220302&q=Togliatti&days=10&aqi=yes&alerts=yes&lang=ru",
  time: "",
  days: {
    daysRU: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
    daysRUFull: [
      "Воскресение",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    months: [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ],
    weekDay: "",
  },
  current: {
    condition: "",
    temp: "",
    icon: "",
    air: {
      precipitation: "",
      humidity: "",
      wind: "",
    },
  },
  daily: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY_NAME:
      return { ...state, city: action.city };
    case CHANGE_APIKEY:
      return { ...state, apiKey: action.apiKey };
    case CHANGE_LOCATION_TIME:
      return { ...state, time: action.time };
    case GET_WEEK_DAY:
      return { ...state, days: { ...state.days, weekDay: action.weekDay } };
    case GET_CURRENT_TEMP:
      return { ...state, current: { ...state.current, temp: action.temp } };
    case GET_CURRENT_ICON:
      return { ...state, current: { ...state.current, icon: action.icon } };
    case GET_DAILY_INFO:
      return { ...state, daily: action.daily };
    case GET_CURRENT_CONDITION:
      return {
        ...state,
        current: { ...state.current, condition: action.condition },
      };
    case GET_CURRENT_AIR:
      return {
        ...state,
        current: {
          ...state.current,
          air: {
            precipitation: action.precipitation,
            humidity: action.humidity,
            wind: action.wind,
          },
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
