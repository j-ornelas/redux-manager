import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCmZPkDGDliUFl_jJNG0iFtSTDXAKMVvyQ',
      authDomain: 'manager-d4612.firebaseapp.com',
      databaseURL: 'https://manager-d4612.firebaseio.com',
      projectId: 'manager-d4612',
      storageBucket: 'manager-d4612.appspot.com',
      messagingSenderId: '105520622053',
    };

    firebase.initializeApp(config);
  }

  render() {
    // we add reduxthunk as a middleware. we now need 3 arguments for
    // createStore intead of just 'reducers';

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
