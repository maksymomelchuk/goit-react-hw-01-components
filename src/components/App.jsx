import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionsList from './Transactions/TransactionsList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div>
        <Statistics title="UPLOAD STATS" stats={data}></Statistics>
      </div>
      <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <div>
        <TransactionsList data={transactions}></TransactionsList>
      </div>
    </>
  );
};
