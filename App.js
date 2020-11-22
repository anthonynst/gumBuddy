import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import React from 'react';
import getStore from "./src/store/index";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Statistics } from './src/page/Statistics';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Text>Statistics!</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text>Calendar!</Text>
    </View>
  );
}

let {store, persistor} = getStore();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return <MaterialCommunityIcons name='weight-pound' size={size} color={color} />;
                } else if (route.name === 'Statistics') {
                  return <Ionicons name='ios-stats' size={size} color={color} />;

                } else if ( route.name === "Calendar"){
                  return <AntDesign name='calendar' size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
          }}    
          >
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Statistics" component={Statistics} />
        </Tab.Navigator>
      </NavigationContainer>

      </PersistGate>
    </Provider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
