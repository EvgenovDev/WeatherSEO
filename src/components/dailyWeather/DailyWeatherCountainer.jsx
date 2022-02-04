import { connect } from "react-redux";
import DailyWeather from "./DailyWeather";

const mapStateToProps = (state) => {
  return {
    arrayDays: state.daily,
    months: state.days.months,
    days: state.days.daysRUFull,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const DailyWeatherCountainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyWeather);
