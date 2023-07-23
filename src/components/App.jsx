import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import stats from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import items from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={stats} />
      <FriendsList title="friendsList" friends={friends} />
      <TransactionHistory title="transactions History" items={items} />
    </div>
  );
};
