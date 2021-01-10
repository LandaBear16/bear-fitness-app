import React from "react"
import { StyleSheet, View, Image, Text } from "react-native"


import AppButtonBasic from '../components/AppButtonBasic'
import AppText from '../components/AppText'
import Screen from "../components/Screen"
import {colours} from "../config/theme"
import LinearGradientScreen from '../components/LinearGradientScreen'
import defaultStyles from "../config/defaultStyles"


const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <LinearGradientScreen/>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/b-fit-logo.png")} />
        <AppText h2 neonBlue style={styles.caption}>Workouts that suit you</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButtonBasic title="Sign In" onPress={() => navigation.navigate("Login")} />
        <AppButtonBasic title="Register" colour="secondary" onPress={() => navigation.navigate("Register")}/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bgLogo: {
    flex: 1,
    resizeMode: "cover",
    width: '100%'
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: '80%',
    height: '100%',
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  caption: {
    fontSize: 30,
    paddingTop: 20,
    fontFamily: 'Marvel_700Bold',
    color: colours.neonBlue
  },
});

export default WelcomeScreen;
