import { View, Text,StyleSheet,Image,FlatList, Pressable } from 'react-native'
import React from 'react'
import products from "../data/products";

import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({navigation}) => {

  const dispatch= useDispatch();

  const products=useSelector(state=>state.products.products)

  return (
    <FlatList
    data={products}
    renderItem={({item}) => (
      <Pressable onPress={()=>{
        //update product
       dispatch(productsSlice.actions.setSelectedProduct(item.id))

        navigation.navigate('Product Details')}}
       style={styles.itemContainer}>

      <Image source={{ uri: item.image }} style={styles.image} />
      </Pressable> 
    )}
    numColumns={2}
  />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    itemContainer:{
      width:'50%',
      padding:1,
    }
  });