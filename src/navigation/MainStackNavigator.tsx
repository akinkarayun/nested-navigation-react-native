import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Homescreen } from '../screens/Homescreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { Contact } from '../screens/Contact';

interface MainStackNavigatorProps {

}

const Stack = createStackNavigator();



export const MainStackNavigator: React.FC<MainStackNavigatorProps> = ({ }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Homescreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

export const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};