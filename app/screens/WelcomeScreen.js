import React from "react"
import { ImageBackground, StyleSheet, View, Image } from "react-native"

import AppButton from '../components/AppButton'
import Screen from "../components/Screen"


const WelcomeScreen = ({ navigation }) => {
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
        <AppButton title="Sign In" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" colour="secondary" onPress={() => navigation.navigate("Register")}/>
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
