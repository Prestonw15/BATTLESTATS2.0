import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // v5
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState({ token: '', author: null });
  console.log(user);
  return (
    <Router>
      <div>
        <header>
          <h1>Library App</h1>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <a href="https://www.google.com">Go to Google</a>
            </li>
          </ul>
        </header>
      </div>

      <Switch>
        <Route exact path="/Dashboard" render={() => <Dashboard user={user} />} />
        <Route exact path="/" render={() => <Login setUser={setUser} />} />
      </Switch>
    </Router>
  );
}

export default App;
