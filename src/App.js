import Profile from "./Components/Profile/Profile";
import user from "./user.json";
import Statistics from "./Components/Statistics/Statistics";
import data from "./data.json";
import FriendList from "./Components/FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistic={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
