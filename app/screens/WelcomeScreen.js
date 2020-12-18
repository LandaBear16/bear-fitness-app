import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppButton from '../components/AppButton'
import Screen from "../components/Screen";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcomeScreen.jpg")}
    >
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/bearFitness.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Sign In" />
        <AppButton title="Register" colour="secondary" />
      </View>
    </Screen>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
});

export default WelcomeScreen;
