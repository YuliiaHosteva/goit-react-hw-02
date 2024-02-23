import './App.css';
import { Navigation } from '../Navigation/Navigation';
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import userData from '../../backend/userData.json';
import friends from '../../backend/friends.json';
import transactions from '../../backend/transactions.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                username={userData.username}
                avatar={userData.avatar}
                location={userData.location}
                tag={userData.tag}
                stats={userData.stats}
              />
            }
          />
          <Route path="/friend-list" element={<FriendList friends={friends} />} />
          <Route
            path="/transaction-history"
            element={<TransactionHistory items={transactions} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;