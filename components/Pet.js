import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Pet = ( props ) => {
  const { item } = props

  return (
    <TouchableOpacity style={ styles.item } onPress={() => props.navigation.navigate('Details', {itemId: item.id}) }>
      <View style={ styles.itemLeft }>
        <View>
          <Image
          style={ styles.stretch }
          source={{ uri: item.img }} />
        </View>  
        <View style={ styles.itemText }>
          <View>
            <MaterialCommunityIcons name="dog" size={24} color="black" />
          </View>
          <Text style={ styles.itemPetName }>{ item.name }</Text>
          <Text style={ styles.itemPet }>{ item.age }</Text>
          
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
     flexDirection: "row",
     alignItems: 'center',
     justifyContent: "space-between",
     marginBottom: 10, 
  },

  stretch: {
    width: Dimensions.get('window').width / 3 - 10,
    height: 100,
    resizeMode: 'stretch',
    marginRight: 20,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,   
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#ffff',
    flex: 1,
    borderRadius: 8,
    height: 100,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
  },

  itemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },

  itemPetName: {
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
  },

  itemPet: {
    fontFamily: 'Roboto_400Regular',
  },
});



export default Pet;