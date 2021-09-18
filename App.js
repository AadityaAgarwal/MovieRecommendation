import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home';
import Popular from './screens/Popular';
import Recommended from './screens/Recommended';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Home: Home,
  Recommended:Recommended,
  Popular:Popular
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
