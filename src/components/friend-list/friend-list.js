import React from "react";
import propTypes from "prop-types";
import FriendListItem from "../friend-list-item/friend-list-item";
import styles from "./friend-list.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.container}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default FriendList;
