import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const BackButton = () => {
const navigation = useNavigation()

    return (
        
        <TouchableOpacity onPress = { () => navigation.goBack() } style={styles.backButton}>
          <Text style={styles.backText}>{'Voltar'}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

  backText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily :'Roboto_700Bold'
  },

  backButton: {
    display: 'flex',
    width: 80,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FFF',
  }
});


export default BackButton

