import { connect } from "react-redux";
import WeatherDescription from "./WeatherDescription";

const mapStateToProps = (state) => {
  return {
    currentTemp: Math.round(state.current.temp),
    currentIcon: state.current.icon,
    precipitation: Math.round(state.current.air.precipitation),
    humidity: Math.round(state.current.air.humidity),
    wind: Math.round(state.current.air.wind),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const WeatherDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDescription);
