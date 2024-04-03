import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// Book App
const BooksAppScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/book.jpeg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Books App</Text>
        <Text style={styles.subtitle}>Discover and Read New Books</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NewScreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // Change to a suitable color for Books app
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // Change to a suitable color for Books app
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white', // Change to a suitable color for Books app
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BooksAppScreen;