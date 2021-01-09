import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { FirebaseProvider } from './app/context/FirebaseContext'
import { UserProvider } from './app/context/UserContext'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './app/redux/reducer/index'


import AppStackScreens from './app/stacks/AppStackScreens'
import TestScreen from './app/screens/TestScreen'
import WorkoutGeneratorStack from './app/stacks/WorkoutGeneratorStack'
import CountDownTimer from './app/components/CountdownTimer'


const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Provider store={store}>
          <NavigationContainer>
            <CountDownTimer />
          </NavigationContainer>
        </Provider>
      </UserProvider>
    </FirebaseProvider>
  );
}

