import React from 'react';
import {ActivityIndicator, Text} from 'react-native-paper';
import {View} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3d3d3d',
      }}>
      <ActivityIndicator />
      <Text>Buscando dados salvos...</Text>
    </View>
  );
};
