import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { FirebaseProvider } from './app/context/FirebaseContext'
import { UserProvider } from './app/context/UserContext'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './app/redux/reducer/index'
import AppLoading from 'expo-app-loading'


import AppStackScreens from './app/stacks/AppStackScreens'
import TestScreen from './app/screens/TestScreen'
import WorkoutGeneratorStack from './app/stacks/WorkoutGeneratorStack'
import SavedWorkoutsScreen from './app/screens/SavedWorkoutsScreen'
import MainStackScreens from './app/stacks/MainStackScreens'

import { 
  useFonts,
  Marvel_400Regular,
  Marvel_400Regular_Italic,
  Marvel_700Bold,
  Marvel_700Bold_Italic 
} from '@expo-google-fonts/marvel'



const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  let [fontsLoaded, error] = useFonts({
    Marvel_400Regular,
    Marvel_400Regular_Italic,
    Marvel_700Bold,
    Marvel_700Bold_Italic 
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <FirebaseProvider>
      <UserProvider>
        <Provider store={store}>
          <NavigationContainer>
            <WorkoutGeneratorStack />
          </NavigationContainer>
        </Provider>
      </UserProvider>
    </FirebaseProvider>
  );
}

