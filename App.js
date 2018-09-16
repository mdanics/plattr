import React, { Component } from "react";
import { Map } from './src/map';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from 'react-navigation';
import DrawerItems from './drawerItems';
import {Platform, StyleSheet} from 'react-native';
import RootNavigator from './rootNavigator'

export const App2 = createDrawerNavigator(
  { Home: { screen: RootNavigator } },
  {
    contentComponent: (props) => (
          <DrawerItems {...props}/>
    ),
    // set drawerPosition to support rtl toggle on android
    drawerPosition: 'left',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <App2/>
    );
  }
}



