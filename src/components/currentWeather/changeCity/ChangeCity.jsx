import styles from "./changeCity.module.css";

const ChangeCity = (props) => {
  return (
    <div className={styles.container}>
      {props.cityList.map((city, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={(e) => {
            props.getDataWeatherThunkCreator(
              props.apiKey,
              e.target.textContent
            );
          }}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default ChangeCity;
