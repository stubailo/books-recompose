import React, { Component } from 'react';
import './App.css';
import BookSearch from './components/branch-complete.jsx'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

// create network interface for your app to connect to Apollo Launchpad. Set the uri
// value to the graphql-up endpoint you got.
const networkInterface = createNetworkInterface({ uri: 'https://k7mmlwwl7.lp.gql.zone/graphql' });

// instantiate apollo-client
const client = new ApolloClient({
  networkInterface,
})
// wrap your component in apollo-client's ApolloProvider so the Launchpad graphql data can
// talk to your component.
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
              <Link to="/" className="navbar">Apollo Client - Recompose Demo</Link>
              <Switch>
                <Route exact path="/" component={BookSearch}/>
              </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
