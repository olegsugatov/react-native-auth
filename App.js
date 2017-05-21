import React from 'react';

import { NavigatorIOS,
         StyleSheet, 
         Text, 
         View } from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';
import Main from './src/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS 
        initialRoute = {{
          title: 'Github Networking'
          component: Main
        }}/>
        // <Login />
        // <Main />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
