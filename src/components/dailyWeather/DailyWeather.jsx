import styles from "./dailyWeather.module.css";
import WeatherDay from "./weatherDay/WeatherDay";

const DailyWeather = (props) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.dailyTitle}>Прогноз погоды на 3 дня</h2>
      <div className={styles.elemContainer}>
        {props.arrayDays.map((day, index) => (
          <WeatherDay
            icon={day.day.condition.icon}
            maxTemp={Math.round(day.day.maxtemp_c)}
            minTemp={Math.round(day.day.mintemp_c)}
            condition={day.day.condition.text}
            date={new Date(day.date).getDate()}
            month={props.months[new Date(day.date).getMonth()]}
            weekDay={
              index == 0 ? "Сегодня" : props.days[new Date(day.date).getDay()]
            }
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyWeather;
