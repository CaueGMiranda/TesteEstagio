import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PetModal from '../components/PetModal';
import BackButton from '../components/BackButton';

export default function Details(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const {itemId} = props.route.params
  const [pet, setPet] = useState({})
  useEffect( () => {
    fetch('https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/animals/' + itemId).then(response=>response.json()).then(response=>setPet(response))
  }, [])
    return (
        <View style={styles.container}>
          <BackButton />
          <PetModal modalVisible={modalVisible} setModalVisible={setModalVisible} pet={pet}/>
          <View>
            <View style={styles.header}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petAge}>{pet.age} anos</Text>
            </View>
            <Image
              style={ styles.photo }
              source={{
                uri: pet.img
              }}
            />
        </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons style={styles.iconButton} name="information" size={36} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>ADOTAR</TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons style={styles.iconButton} name="image" size={36} color="black" />
            </TouchableOpacity>
          </View>
        </View>
	);
}

const styles = StyleSheet.create({
  photo: {
    resizeMode: 'strech',
    height: 480,
    display: 'flex',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
    marginTop: 30,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#FFA360',
    padding: 18,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    color: '#FFFF',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    marginHorizontal: 30,
  },

  header: {
    marginTop: 10,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButton: {
    padding: 10,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
  },


  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },

  petName: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
  },

  petAge: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
  },

  iconBack: {
    display: 'flex',
    width: 80,
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    height: 30,
    paddingVertical: 6,
    fontFamily :'Roboto_700Bold'
  },
});



