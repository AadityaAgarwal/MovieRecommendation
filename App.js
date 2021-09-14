import React from 'react';
import { View, Text, TouchableOpacity, Alert,StyleSheet } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Details from './screens/Details';
import Home from './screens/Home';
import UserDetails from './screens/UserDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Home:Home,
  Details:Details,
  UserDetails:UserDetails,
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
