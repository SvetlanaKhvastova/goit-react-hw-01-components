import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticsItems from './StatisticsItems/StatisticsItems';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatisticsItems stats={stats} />
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
