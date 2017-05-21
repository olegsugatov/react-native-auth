import React, { Component } from 'react';

import { NavigatorIOS,
         StyleSheet, 
         Text, 
         View } from 'react-native';

import Splash from './Splash';
// import Login from './src/components/Login/Login';

// import TabView from './TabView';
import TabViewExample from './TabViewExample';
// var Login = require('./TabView');
// import Main from './src/components/Main';

export default class App extends Component {

  render() {
    return (
      // <NavigatorIOS 
      //   initialRoute = {{
      //     component: Main,
      //     title: 'Github Networking',
      //   }}
      //   style={{flex: 1}}
      //   />
        <TabViewExample />
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
