import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import LogInScreen from './screens/LogInScreen';
import CreateAcctScreen from './screens/CreateAcctScreen';

const MainNavigator = StackNavigator({
  LogIn: { screen: LogInScreen },
  createAcct: { screen: CreateAcctScreen },
});

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    </Provider>
  );
}

export default App;
