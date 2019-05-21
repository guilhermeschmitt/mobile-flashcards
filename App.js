import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainNavigator from './src/components/MainNavigator';
import reducer from './src/reducers'
import { setLocalNotification } from './src/utils/notification';
import { blue } from './src/utils/colors';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}