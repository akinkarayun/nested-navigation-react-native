import React from 'react'
import { Button, Text, View } from 'react-native';

interface HomescreenProps {

}

export const Homescreen: React.FC<HomescreenProps> = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}