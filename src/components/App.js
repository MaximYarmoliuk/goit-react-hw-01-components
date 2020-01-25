import React from "react";
import Profile from "./social-profile/social-profile";
import Statistics from "./statistics/statistics";
import FriendList from "./friend-list/friend-list";
import TransactionHistory from "./transaction-history/transaction-history";
import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export default function App() {
  return (
    <div>
      <Profile user={user} />

      <Statistics title="UPLOAD STATS" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}


