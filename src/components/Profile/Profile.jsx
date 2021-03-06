import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      {/* {stats && (
        <ul className={s.stats}>
          <li className={s.statsList}>
            <span className={s.label}>Followers </span>
            <span className={s.quantity}>
              {stats.followers ? stats.followers : 0}
            </span>
          </li>
          <li className={s.statsList}>
            <span className={s.label}>Views </span>
            <span className={s.quantity}>{stats.views ? stats.views : 0}</span>
          </li>
          <li className={s.statsList}>
            <span className={s.label}>Likes </span>
            <span className={s.quantity}>{stats.likes ? stats.likes : 0}</span>
          </li>
        </ul>
      )} */}
      {/* {stats && (
        <ul className={s.stats}>
          {console.log(stats)}
          {stats.map(el => {
            console.log(Object.keys(el));
            console.log(Object.values(el));
            return (
              <li className={s.statsList}>
                <span className={s.label}>{Object.keys(el)} </span>
                <span className={s.quantity}>
                  {Object.values(el) ? Object.values(el) : 0}
                </span>
              </li>
            );
          })}
        </ul>
      )} */}

      {stats && (
        <ul className={s.stats}>
          {Object.entries(stats).map(el => {
            console.log(el);
            return (
              <li className={s.statsList} key={el[0]}>
                <span className={s.label}>{el[0]} </span>
                <span className={s.quantity}>{el[1] ? el[1] : 0}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
