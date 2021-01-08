import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { firebase } from '../firebase/config'
import { selectedEquipmentList, setEquipmentList } from '../redux/action/workout-fitness'
import { snapshotToArray } from '../helper/snapshotToArray'

import AppBlock from '../components/AppBlock'
import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import { sizes} from "../config/theme"
import Screen from '../components/Screen'

const { width } = Dimensions.get("window")

const EquipmentList = ({ navigation }) => {
  const { equipmentList, selectedEquipment } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const addEquipment = equipment => dispatch(selectedEquipmentList(equipment))
  const addEquipmentList = equipArr => dispatch(setEquipmentList(equipArr))

  useEffect(() => {
    getEquipmentList()
  }, [])

  const getEquipmentList = async () => {
    const equipmentRef = firebase.firestore().collection('equipment');
    const snapshot = await equipmentRef.orderBy('name').get();
    const equipmentArray = snapshotToArray(snapshot)
    addEquipmentList(equipmentArray)

  }


  const handleSelected = (id) => {
    const list = selectedEquipment
    list.includes(id) 
    ? list.splice(list.indexOf(id), 1)
    : list.push(id)

    addEquipment(list)
  }


  const activeButton = (key) => {
    return selectedEquipment.includes(key) ? 'plight' : 'gray'
  }

  return (
    <Screen style={styles.container}>
    <AppText primary height={20} h1 center bold style={styles.header}>Select your Equipment:</AppText>
    <AppBlock style={styles.scrollContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: sizes.base * 2 }}
        >
          <AppBlock flex={false} row space="between" style={styles.goals}>
            {equipmentList && equipmentList.map(equipment => (
              <TouchableOpacity
                key={equipment.id}
                onPress={() => handleSelected(equipment.id)}
              >
                <AppCard center middle shadow colour={activeButton(equipment.id)} style={styles.goal} >
                  <AppText dark height={20} size={18}>
                    {equipment.item.name}
                  </AppText>
                </AppCard>
              </TouchableOpacity>
            ))}
          </AppBlock>
        </ScrollView>
      </AppBlock>
      <BottomNavigationButtons title={BUTTON_TITLES.NEXT} navigation={navigation} screenName='MuscleGroup' backName='TrainingGoals' style={styles.bottomNav}onPressEvent={null}/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollContainer: {
    flex: 9,
  },
  header: {
    paddingVertical: 30
  },
  goals: {
    flexWrap: "wrap",
    paddingHorizontal: sizes.base * 2,
    marginBottom: sizes.base * 3.5
  },
  goal: {
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    height: 150,
  },
  bottomNav: {
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    height: 50,
  }
})

export default EquipmentList