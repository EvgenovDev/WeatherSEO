import styles from "./cityDescription.module.css";

const CityDescription = (props) => {
  return (
    <div className={styles.cityDescription}>
      <div className={styles.cityDescriptionContainer}>
        <h1 className={styles.title}>{props.city}</h1>
        <p className={styles.subtitle}>
          {props.daysRUFull[props.weekDay]}, {props.time}
        </p>
        <p className={styles.subtitle}>{props.currentCondition}</p>
      </div>
    </div>
  );
};

export default CityDescription;
