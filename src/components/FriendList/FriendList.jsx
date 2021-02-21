import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li className={s.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friend: PropTypes.shape({ id: PropTypes.number.isRequired }),
};

export default FriendList;
