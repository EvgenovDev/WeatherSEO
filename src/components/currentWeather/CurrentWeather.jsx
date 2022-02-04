import styles from "./currentWeather.module.css";
import { CityDescriptionContainer } from "./cityDesciprtion/CityDescriptionContainer";
import { ChangeCityContainer } from "./changeCity/ChangeCityContainer";
import { WeatherDescriptionContainer } from "./weatherDescription/WeatherDescriptionContainer";

const CurrentWeather = (props) => {
  return (
    <div className={styles.main}>
      <CityDescriptionContainer />
      <ChangeCityContainer />
      <WeatherDescriptionContainer />
    </div>
  );
};

export default CurrentWeather;
