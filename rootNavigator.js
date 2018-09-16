/* @flow */

import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import {Map} from './src/map';
import {Profile} from './src/profile';
import History from './src/History';
import Review from './src/AppReview';


export default createStackNavigator(
  {
    Home: { screen: Map},
    Profile : { screen: Profile},
    History : { screen: History},
    Review : { screen: Review}
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Plattr" />
          <Appbar.Action icon="add" onPress={() => {}} />
        </Appbar.Header>
      ),
    }),
  }
);
