import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // v5
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const httpLink = createHttpLink({
  uri: '/graphql'
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
function App() {
  const [user] = useState({ token: '', author: null });
  console.log(user);
  return (
    <ApolloProvider client={client}>
    <Router>
      {/* <div>
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
      </div> */}
      <Switch>
        <Route exact path="/" render={() => <Login/>} />
        <Route exact path="/Dashboard" render={() => <Dashboard user={user} />} />
      </Switch>
    </Router>
    ,/</ApolloProvider>
  );
}

export default App;
