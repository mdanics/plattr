/* @flow */

import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
  Drawer,
  withTheme,
  Switch,
  TouchableRipple,
  Text,
  Colors,
} from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
  toggleTheme: Function,
  toggleRTL: Function,
  isRTL: boolean,
  isDarkTheme: boolean,
};
type NavigationType = {
  label: string,
  icon: string,
  key: number,
}
type State = {
  open: boolean,
  drawerItemIndex: number,
  navigation: NavigationType,
};

const DrawerItemsData = [
  { label: 'Explore', icon: 'search', key: 0 },
  { label: 'Profile', icon: 'person', key: 1 },
  { label: 'Favourite Dishes', icon: 'star', key: 2 },
  { label: 'History', icon: 'history', key: 3 },
];

class DrawerItems extends React.Component<Props, State> {
  state = {
    open: false,
    drawerItemIndex: 0,
  };

  _setDrawerItem = index => this.setState({ drawerItemIndex: index });

  render() {
    const { colors } = this.props.theme;
    const navigation = this.props.navigation;
    return (
      <View style={[styles.drawerContent, { backgroundColor: colors.surface }]}>
        <Drawer.Section title="Plattr | Explore Food">
          {DrawerItemsData.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              theme={
                props.key === 3
                  ? { colors: { primary: Colors.tealA200 } }
                  : undefined
              }
              active={this.state.drawerItemIndex === index}
              onPress={() => {
                this._setDrawerItem(index);
                if (index == 0){
                  navigation.navigate('Home');
                } else if (index == 1) {
                  navigation.navigate('Profile');
                } else if (index == 3) {
                  navigation.navigate('History');
                }
                }
              }
            />
          ))}

        </Drawer.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default withTheme(DrawerItems);
