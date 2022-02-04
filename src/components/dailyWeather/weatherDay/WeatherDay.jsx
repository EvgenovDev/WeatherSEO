import styles from "./WeatherDay.module.css";

const WeatherDay = (props) => {
  return (
    <div>
      <h3 className={styles.weekDay}>{props.weekDay}</h3>
      <p className={styles.date}>
        {props.date} {props.month}
      </p>
      <img src={props.icon} alt="icon" className={styles.icon} />
      <div>
        <span className={styles.maxTemp}>{props.maxTemp}&deg;</span>
        <span className={styles.minTemp}>{props.minTemp}&deg;</span>
      </div>
      <p className={styles.condition}>{props.condition}</p>
    </div>
  );
};

export default WeatherDay;
