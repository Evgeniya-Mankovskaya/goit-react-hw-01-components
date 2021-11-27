import style from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ statistic, title }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {statistic.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
