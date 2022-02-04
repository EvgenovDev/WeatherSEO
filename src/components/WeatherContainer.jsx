import { connect } from "react-redux";
import Weather from "./Weather";
import { getDataWeatherThunkCreator } from "../redux/weather/weatherReducer";

const mapStateToProps = (state) => {
  return {
    apiKey: state.apiKey,
    city: state.city,
  };
};

const WeatherContainer = connect(mapStateToProps, {
  getDataWeatherThunkCreator,
})(Weather);

export default WeatherContainer;
