import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {APP_COLOR} from '../utils/constants';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerListWrapper}>
        <Text>Hello, Shivam</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: APP_COLOR.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
