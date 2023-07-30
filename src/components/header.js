import React  from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions  } from 'react-native';



const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
  headerContainer: {
    // Add any styles for the header container if needed.
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#800181',
    marginBottom: 15,
    marginTop: 20
  },

  headerSearch: {
    padding: 8,
    backgroundColor: "#ECEEF0",
    borderRadius: 7,
    width: windowWidth - 40, // Subtract any desired padding or margins from the window width
  }
});

function Header() {

  

  return (
  
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>BORA STORE</Text>
        </View>

        <TextInput 
          placeholder="Search..."
          keyboardType="default"
          style={styles.headerSearch}
        />
      </View>

  );
}

export default Header;
