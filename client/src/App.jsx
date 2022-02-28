import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // v5
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Steam from './pages/steam';
import Xbox from './pages/xbox';
import Playstation from './pages/playstation';
import Messaging from './pages/messaging';
import Signup from './pages/signup';
// import useLocalStorage from '../hooks/userLocalStorage';


const httpLink = createHttpLink({
  uri: '/graphql'
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
function App() {
  // const [id, setId] = useLocalStorage()
  const [user] = useState({ token: '' });
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
        <Route exact path="/Steam" render={() => <Steam user={user} />} />
        <Route exact path="/Xbox" render={() => <Xbox user={user} />} />
        <Route exact path="/Playstation" render={() => <Playstation user={user} />} />
        <Route exact path="/Messaging" render={() => <Messaging user={user} />} />
        <Route exact path="/Signup" render={() => <Signup user={user} />} />
        
        
      </Switch>
    </Router>
    ,/</ApolloProvider>
  );
}

export default App;
