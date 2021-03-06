import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticsItems.module.css';

const randomColor = () => {
  const random = () => Math.floor(Math.random() * 256);

  return `rgba( ${random()} , ${random()} , ${random()} )`;
};

const StatisticsItems = ({ stats }) => {
  return (
    <>
      <ul className={s.statList}>
        {stats &&
          stats.map(item => (
            <li
              className={s.item}
              key={item.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={s.label}>{item.label} </span>
              <span className={s.percentage}>{item.percentage}%</span>
            </li>
          ))}
      </ul>
    </>
  );
};

StatisticsItems.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsItems;
