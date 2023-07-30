import React from 'react'

import { Text, View, Image, StyleSheet } from 'react-native'


const styles = StyleSheet.create({

  cardBody:{
    margin: 50,
    backgroundColor: "#ECEEF0",
    borderRadius: 7

    

  },

  cardImage: {
    width: "80",
    height: 200,
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
    
  },

  cardHeader: {

    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 17

  },
  
  cardPrice: {
    fontWeight: "normal",
    color: "gray",
    paddingTop: 10,
    paddingLeft: 17,
    paddingBottom: 10
  },
  cardStock: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingBottom: 10
  }

 })



function ProductCard(item) {

  
 

  return (

    <View style={ styles.cardBody}>
      <Image source={{ uri: item.item.imgURL }}   resizeMode="cover" style={styles.cardImage}/>

      <Text style={styles.cardHeader}>{item.item.title}</Text>


      <Text style={styles.cardPrice}>{item.item.price}</Text>

      {item.item.inStock === false && <Text style={styles.cardStock}>Sold</Text>}
      
    </View>

  )
}

export default ProductCard