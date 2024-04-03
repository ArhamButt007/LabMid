import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

const API_URL = 'https://dev.iqrakitab.net/api/books'; // API

const NewScreen = () => {
  const [isRTL, setIsRTL] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const { data } = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRTL = () => {
    setIsRTL(prevState => !prevState);
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem}>
      <Image source={{ uri: item.coverPhotoUri }} style={styles.coverImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleRTL} style={styles.toggleButton}>
        <Text>{isRTL ? 'Switch to LTR' : 'Switch to RTL'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by book name..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filteredBooks}
          keyExtractor={item => item._id}
          renderItem={renderBookItem}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  toggleButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  coverImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
});

export default NewScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

// const API_URL = 'https://dev.iqrakitab.net/api/books';

// const NewScreen = () => {
//     const [isRTL, setIsRTL] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchBooks = async () => {
//         try {
//           const response = await fetch(API_URL);
//           const { data } = await response.json();
//           setBooks(data);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching books:', error);
//         }
//       };
//       fetchBooks();
//     }, []);
  
//     const filteredBooks = books.filter(book =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
  
//     const toggleRTL = () => {
//       setIsRTL(prevState => !prevState);
//     };
  
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={toggleRTL} style={styles.toggleButton}>
//           <Text>{isRTL ? 'Switch to LTR' : 'Switch to RTL'}</Text>
//         </TouchableOpacity>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search by book name..."
//           onChangeText={setSearchQuery}
//           value={searchQuery}
//         />
//         {loading ? (
//           <Text>Loading...</Text>
//         ) : (
//           <FlatList
//             data={filteredBooks}
//             keyExtractor={item => item._id}
//             renderItem={({ item }) => (
//               <View style={styles.bookItem}>
//                 <Image source={{ uri: item.coverPhotoUri }} style={styles.coverImage} />
//                 <View>
//                   <Text style={styles.bookTitle}>{item.title}</Text>
//                   <Text style={styles.bookAuthor}>{item.author.name}</Text>
//                 </View>
//               </View>
//             )}
//           />
//         )}
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingHorizontal: 10,
//       paddingVertical: 20,
//       backgroundColor: '#fff',
//     },
//     toggleButton: {
//       alignSelf: 'flex-end',
//       padding: 10,
//     },
//     searchInput: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       padding: 10,
//       marginBottom: 10,
//     },
//     bookItem: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderBottomWidth: 1,
//       borderBottomColor: '#ccc',
//       paddingVertical: 10,
//     },
//     coverImage: {
//       width: 50,
//       height: 50,
//       marginRight: 10,
//     },
//     bookTitle: {
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     bookAuthor: {
//       fontSize: 14,
//       color: '#666',
//     },
//   });

// export default NewScreen;