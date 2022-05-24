import React from 'react'
import { Button, Text, View } from 'react-native';

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}