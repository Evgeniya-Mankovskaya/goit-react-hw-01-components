import PropTypes from "prop-types";
import style from "./FriendList.module.css";

const Friend = ({ avatar, friendsName, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{friendsName}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendsName: PropTypes.string.isRequired,
};
export default Friend;
