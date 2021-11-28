import style from "./Statistics.module.css";
import PropTypes from "prop-types";

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b}, 20)`;
};

function Statistics({ statistic, title }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {statistic.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={style.item}
            style={{
              backgroundColor: randomColor(),
            }}
          >
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
