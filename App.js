import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksAppScreen from './BooksAppScreen';
import NewScreen from './NewScreen';
const API_URL = 'https://dev.iqrakitab.net/api/books';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BooksApp">
        <Stack.Screen name="BooksApp" component={BooksAppScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;


