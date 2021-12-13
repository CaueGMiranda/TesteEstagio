import React from "react";
import { View } from "react-native";
import Pet from "./Pet";

const PetList = (props) => {
  const {pets} = props
  const mapItems = (item) => <Pet item={item} navigation={props.navigation}/>
  

  return (
    <View style={{overflow: 'auto', maxHeight: '56vh'}}>  
     { pets.map( mapItems ) } 
      </View>
  )
}

export default PetList