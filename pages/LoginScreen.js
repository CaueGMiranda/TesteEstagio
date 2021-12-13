import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';

export default function LoginScreen(props) {
    return (
    <KeyboardAvoidingView>
      <View>
        <Image style={styles.logo}
        source={require('../Images/ico.png')} 
        />
        <Text style={ styles.loginTitle }>LOGIN</Text>
        <Text style={ styles.loginSubtitle }>Insira seus dados para continuar</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.input}>EMAIL</Text>
        <TextInput style={styles.textInput}
          placeholder = 'user@exemplo.com.br'
          autoCorrect = { false }
          onChangeText= { () => {} }
        />
        <Text style={styles.input}>SENHA</Text>
         <TextInput  style={styles.textInput}
          secureTextEntry={true}
          placeholder = '*****'
          autoCorrect = { false }
          onChangeText= { () => {} }
        />
        <TouchableOpacity style={styles.entrarButton} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.entrarText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>	
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginTitle: {
    fontFamily: 'Roboto_400Regular',
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
  },

  logo: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
    marginTop: 130,
    marginLeft: 30,
  },

  loginSubtitle: {
    marginLeft: 30,
    marginTop: 5,
    fontFamily: 'Roboto_400Regular',
  },

  entrarButton: {
    backgroundColor: '#FFA360',
    width: '85vw',
    height: 55,
    padding: 9,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginLeft: 30,
    marginRight: 30,
  },

  entrarText: {
    color: '#FFFF',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },

  input: {
    color: '#FFA360',
    marginBottom: 5,
    marginTop: 45,
    marginLeft: 30,
    fontWeight: 'bold',
  },

  textInput: {
    marginLeft: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 0.1,
    marginRight: 30,
    paddingBottom: 8,
  }

});
