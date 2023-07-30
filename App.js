import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard, FlatList, VirtualizedList } from 'react-native';

import { ProductCard, Header } from "./src/components/index"

import productData from "./utily/productData.json"

export default function App() {

  const getProduct = ({ item }) => (

    <ProductCard item={item} />

  )


  return (

    <SafeAreaView style={styles.container}>



      <View style={styles.content}>

        <FlatList
          ListHeaderComponent={<Header />}

          data={productData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={getProduct}
        />


      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'start',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    paddingTop: 10, // You can adjust this value to add some space between the Header and the content
  },
});
