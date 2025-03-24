import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import AppNavigator from './navigation/AppNavigator.js';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
