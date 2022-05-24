import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactStackNavigator, MainStackNavigator } from './MainStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface TabNavigatorProps { }

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC<TabNavigatorProps> = ({ }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Contact') {
            iconName = focused ? 'search-outline' : 'search-outline';
            return (
              <Ionicons
                style={{ transform: [{ rotate: '90deg' }] }}
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else {
            iconName = '';
          }
        },
        tabBarActiveTintColor: "#9AC4F8",
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};
