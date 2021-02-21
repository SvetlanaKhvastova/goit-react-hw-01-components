import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <div className={s.friendFlex}>
      <span
        className={`${s.status} ${friend.isOnline ? s.online : s.offline}`}
      ></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </div>
  );
};

FriendListItem.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
