import Friend from "./Friend";
import style from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          friendsName={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
