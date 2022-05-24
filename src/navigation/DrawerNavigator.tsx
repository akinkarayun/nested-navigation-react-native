import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { ContactStackNavigator } from './MainStackNavigator';
import { TabNavigator } from './TabNavigator';


interface DrawerNavigatorProps {

}
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitle: 'Nested Navigation'
};

export const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({ }) => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle} initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}
