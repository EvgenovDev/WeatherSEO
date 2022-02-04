import React from "react";
import CurrentWeather from "./currentWeather/CurrentWeather";
import { DailyWeatherCountainer } from "./dailyWeather/DailyWeatherCountainer";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDataWeatherThunkCreator(this.props.apiKey, this.props.city);
  }
  render() {
    return (
      <>
        <CurrentWeather />
        <DailyWeatherCountainer />
      </>
    );
  }
}

export default Weather;
