import React, { useContext } from 'react'
import { View, Text, Modal } from 'react-native'
import { UserContext } from '../context/UserContext'

const SaveWorkoutModal = ({ modalVisible, toggle }) => {
  const [user, setUser] = useContext(UserContext)
  
  return (
    <View>
      <Modal
      animationType='slide'
      visible={modalVisible}  
    ><Text>SAVE</Text></Modal>
    </View>
  )
}

export default SaveWorkoutModal
