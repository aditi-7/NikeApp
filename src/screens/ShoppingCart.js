import { FlatList, StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'
const ShoppingCartTotals=()=>{
  const subtotal =useSelector(selectSubtotal);
  const deliveryFee=useSelector(selectDeliveryPrice);
  const total=useSelector(selectTotal);
  return(
    <View style={styles.totalsContainer}>
    <View style={styles.row}>
     <Text style={styles.text}>SubTotal</Text>
     <Text style={styles.text}>{subtotal} US$</Text>
    </View>

    <View style={styles.row}>
     <Text style={styles.text}>Delivery</Text>
     <Text style={styles.text}>{deliveryFee}US$</Text>
    </View>

    <View style={styles.row}>
     <Text style={styles.textBold}>Total</Text>
     <Text style={styles.textBold}>{total} US$</Text>
    </View>
</View>
)}
const ShoppingCart = () => {
  const cartItem=useSelector(state=>state.cart.items);
  return (
    <>
    <FlatList
        data={cartItem}
        renderItem={({item})=><CartListItem cartItem={item}/>}
    
        ListFooterComponent={ShoppingCartTotals}
    />

      <Pressable style={styles.button} >
    <Text style={styles.buttonText}>Checkout</Text>
  </Pressable>
</>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer:{
   margin:20,
   paddingTop:10,
   borderColor:'gainsboro',
   borderTopWidth:1,
    },
    row:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginVertical:2,
    },
    text:{
        fontSize:16,
        color:'grey',
    },
    textBold:{
        fontsize:16,
        fontWeight:'500',
    },
    button:{
        position:'absolute',
        bottom:30,
        backgroundColor:'black',
      width:'90%',
     alignSelf:'center',
     padding:20,
     borderRadius:100,
    alignItems:`center`,
       },
       buttonText:{
     color:'white',
       }
})