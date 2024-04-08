import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import {useNavigation} from '@react-navigation/native';
import {APP_COLOR} from '../utils/constants';
import {ROUTES} from '../utils/appRoutes';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import SettingScreen from '../screens/settingScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: APP_COLOR.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: APP_COLOR.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.SETTING) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.NOTIFICATION) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name="menu"
                  size={30}
                  color={APP_COLOR.dark}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATION}
        component={NotificationScreen}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="notifications" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTING}
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          tabBarButton: props => (
            <CustomTabBarButton route="settings" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: APP_COLOR.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
  },
});
