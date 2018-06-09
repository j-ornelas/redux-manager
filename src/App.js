import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
