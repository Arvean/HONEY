import React, {Component} from 'react';
import {
  AppRegistry,
  Platform,
  PermissionsAndroid, // for checking if certain android permissions are enabled
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  NativeEventEmitter, // for emitting events for the BLE manager
  NativeModules, // for getting an instance of the BLE manager module
  Button,
  ToastAndroid, // for showing notification if there's a new attendee
  FlatList, // for creating lists
  Alert,
} from 'react-native';

export default function App() {
  console.log('App executed');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Talk To Ted</Text>
      <Button title="Find Devices" onPress={() => alert('Scanning')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
  },
  list_item_text: {
    flex: 8,
    color: '#575757',
    fontSize: 18,
  },
  list_item_button: {
    flex: 2,
  },
});
