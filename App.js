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

// const BooksAppScreen = ({ navigation }) => {
//   return (
//     <ImageBackground
//       source={require('./assets/book.jpeg')}
//       style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Books App</Text>
//         <Text style={styles.subtitle}>Discover and Read New Books</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('NewScreen')}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const NewScreen = () => {
//   const [isRTL, setIsRTL] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const { data } = await response.json();
//         setBooks(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };
//     fetchBooks();
//   }, []);

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const toggleRTL = () => {
//     setIsRTL(prevState => !prevState);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleRTL} style={styles.toggleButton}>
//         <Text>{isRTL ? 'Switch to LTR' : 'Switch to RTL'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search by book name..."
//         onChangeText={setSearchQuery}
//         value={searchQuery}
//       />
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={filteredBooks}
//           keyExtractor={item => item._id}
//           renderItem={({ item }) => (
//             <View style={styles.bookItem}>
//               <Image source={{ uri: item.coverPhotoUri }} style={styles.coverImage} />
//               <View>
//                 <Text style={styles.bookTitle}>{item.title}</Text>
//                 <Text style={styles.bookAuthor}>{item.author.name}</Text>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue', // Change to a suitable color for Books app
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     backgroundColor: 'transparent',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white', // Change to a suitable color for Books app
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'white', // Change to a suitable color for Books app
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'purple',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   toggleButton: {
//     alignSelf: 'flex-end',
//     padding: 10,
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   bookItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 10,
//   },
//   coverImage: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//   },
//   bookTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   bookAuthor: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

export default App;



// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="BooksApp">
//         <Stack.Screen name="BooksApp" component={BooksAppScreen} />
//         <Stack.Screen name="NewScreen" component={NewScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const BooksAppScreen = ({ navigation }) => {
//   const onPressHandler = () => {
//     navigation.navigate('NewScreen', { message: 'Hello from the new screen!' });
//   };

//   return (
//     <ImageBackground
//       source={require('./assets/book.jpeg')}
//       style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Books App</Text>
//         <Text style={styles.subtitle}>Discover and Read New Books</Text>
//         <TouchableOpacity style={styles.button} onPress={onPressHandler}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const NewScreen = ({ route }) => {
//   const { message } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text>{message}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue', // Change to a suitable color for Books app
//   },
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     fontFamily: 'serif',
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white', // Change to a suitable color for Books app
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontFamily: 'serif',
//     fontSize: 18,
//     color: 'white', // Change to a suitable color for Books app
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'purple',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;



// // import React from 'react';
// // import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// // const BooksAppScreen = () => {
// //   return (
// //     <ImageBackground
// //       source={require('./assets/book.jpeg')}
// //       style={styles.background}>
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Books App</Text>
// //         <Text style={styles.subtitle}>Discover and Read New Books</Text>
// //         <TouchableOpacity style={styles.button}>
// //           <Text style={styles.buttonText}>Get Started</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'lightblue', // Change to a suitable color for Books app
// //   },
// //   container: {
// //     alignItems: 'center',
// //   },
// //   title: {
// //     fontFamily: 'serif',
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     color: 'white', // Change to a suitable color for Books app
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontFamily: 'serif',
// //     fontSize: 18,
// //     color: 'white', // Change to a suitable color for Books app
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: 'purple',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 20,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // const App = () => {
// //   return (
// //     <BooksAppScreen />
// //   );
// // };

// // export default App;


