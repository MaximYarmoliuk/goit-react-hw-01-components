import React from "react";
import propTypes from "prop-types";
import styles from "./friend-list-item.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      {isOnline === true ? (
        <span className={`${styles.statusTrue} ${styles.status}`}>
          {isOnline}
        </span>
      ) : (
        <span className={`${styles.statusFalse} ${styles.status}`}>
          {isOnline}
        </span>
      )}
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://israel.apartogram.com/content/uploads/avatar/none-avatar.png"
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired
};

export default FriendListItem;
