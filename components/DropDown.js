import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{height: 50}}>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropDown}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Todos" value="todos" />
        <Picker.Item label="Cachorros" value="cachorros" />
        <Picker.Item label="Gatos" value="gatos" />
        <Picker.Item label="Coelhos" value="coelhos" />
        <Picker.Item label="Peixes" value="peixes" />

      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    flex: 1,
    borderRadius: 15,
    width: 150,
    marginBottom: 10,
    marginLeft: 15,
    border: 'none',
    height: 150,
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.23,
    shadowRadius: 6,
  }
});

export default DropDown;