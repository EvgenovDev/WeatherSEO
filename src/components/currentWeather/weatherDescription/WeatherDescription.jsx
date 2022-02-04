import styles from "./weatherDescription.module.css";

const WeatherDescription = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h2 className={styles.temp}>
          {props.currentTemp == 0 ? "+" + props.currentTemp : props.currentTemp}
        </h2>
        <img src={props.currentIcon} alt="icon" className={styles.img} />
        <div>
          <h3 className={styles.other}>
            Вероятность осадков:{" "}
            <span className={styles.value}>{props.precipitation + "%"}</span>
          </h3>
          <h3 className={styles.other}>
            Влажность:{" "}
            <span className={styles.value}>{props.humidity + "%"}</span>
          </h3>
          <h3 className={styles.other}>
            Ветер: <span className={styles.value}>{props.wind + " м/с"}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherDescription;
