import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListagemCargas from '../pages/ListagemCargas';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Cargas"
        component={ListagemCargas}
        options={{
          headerStyle: {backgroundColor: '#212121'},
          headerTintColor: '#f0f0f0',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
