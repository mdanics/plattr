/* @flow */

import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import {Map} from './src/map';
import {Profile} from './src/profile';


export default createStackNavigator(
  {
    Home: { screen: Map},
    Profile : { screen: Profile},
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Plattr" />
        </Appbar.Header>
      ),
    }),
  }
);
