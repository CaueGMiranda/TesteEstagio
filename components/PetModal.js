import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const PetModal = (props) => {
    const {modalVisible, setModalVisible, pet} = props  
        return (
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText}>Nome: {pet.name}</Text>
                <Text style={styles.modalText}>Idade: {pet.age}</Text>
                <Text style={styles.modalText}>Email: {pet.email}</Text>
                <Text style={styles.modalText}>Descrição: {pet.description}</Text>
                <Text style={styles.modalText}>Contato: {pet.phone}</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Voltar</Text>
                </Pressable>
                </View>
            </View>
            </Modal>
        );
    };

  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#FFA360",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontFamily: 'Roboto_400Regular',
      
    }
  });
  
  export default PetModal;