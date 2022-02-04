import { connect } from "react-redux";
import ChangeCity from "./ChangeCity";
import { getDataWeatherThunkCreator } from "../../../redux/weather/weatherReducer";

const mapStateToProps = (state) => {
  return {
    cityList: state.cityList,
    apiKey: state.apiKey,
  };
};

export const ChangeCityContainer = connect(mapStateToProps, {
  getDataWeatherThunkCreator,
})(ChangeCity);
