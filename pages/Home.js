import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import PetList from '../components/PetList';
import BackButton from '../components/BackButton';
import DropDown from '../components/DropDown';

export default function Home(props) {
  const [pets, setPets] = useState([])
  useEffect( () => {
    fetch('https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/animals').then(response=>response.json()).then(response=>setPets(response))
  }, [])

  const {navigation} = props
    return (
    	<View style={ styles.container }>
        <BackButton />
        <View style={ styles.petsWrapper }>
          <Text style={ styles.sectionTitle }>HOME</Text>
          <Text style={ styles.sectionSubtitle }>Escolha uma categoria para visualizar</Text>
          <DropDown />
        </View>
			<View style={ styles.results }>
				<Text style={ styles.resultsText }>Resultados da busca:</Text>
      			<PetList navigation = {navigation} pets={pets}/>
      </View>
    	</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA460',
    fontFamily: 'Roboto_400Regular',
    maxHeight: '100vh',
    overflow: 'hidden',
  },

  petsWrapper: {
    paddingTop: 50,
    paddingHorizontal: 10,

  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
    color: '#FFFF',
  },

  sectionSubtitle: {
    paddingLeft: 15,
    paddingBottom: 15,
    fontFamily: 'Roboto_400Regular',
    color: '#FFFF',
  },

  results: {
    backgroundColor: '#FAFAFA',
    padding: 25,
    paddingVertical: 30,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: -3},
    shadowOpacity: 0.15,
    shadowRadius: 24,
    borderColor: '#DBDFE1',
    borderTopWidth: 1,
    maxHeight: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  resultsText: {
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
  },

  button: {
    backgroundColor: '#FFFF',
    width: 100,
    padding: 9,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 15,
  },

  buttonText: {
    color: '#000',
    alignItems: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  iconBack: {
    flex: 1,
    display: 'flex',
    width: 38,
    marginLeft: 5,
    marginVertical: 5,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
    backgroundColor: '#FAFAFA',
  },


});

