import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  View
} from "react-native";

import CountDownTimer from './CountdownTimer'

const App = ({ modalVisible, close, restPeriod }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CountDownTimer restPeriod={restPeriod} closeTimer={close}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;