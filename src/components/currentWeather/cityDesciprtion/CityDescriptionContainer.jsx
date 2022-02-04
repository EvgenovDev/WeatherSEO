import { connect } from "react-redux";
import CityDescription from "./CityDescription";

const mapStateToProps = (state) => {
  return {
    city: state.city,
    time: state.time,
    daysRUFull: state.days.daysRUFull,
    weekDay: state.days.weekDay,
    currentCondition: state.current.condition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const CityDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDescription);
