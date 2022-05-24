import React from 'react';
import { Button, Text, View } from 'react-native';

interface NotificationsScreenProps { }

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  navigation,
}: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Screen</Text>

      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
