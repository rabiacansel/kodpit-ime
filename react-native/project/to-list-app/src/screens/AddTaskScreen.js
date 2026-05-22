import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackGround from '../components/BackGround'
import AddInput from '../components/AddInput'

const AddTaskScreen = () => {
  return (
    <BackGround>
      <AddInput style={{bottom: 30}} label="Password" placeholder="Enter your password"/>
    </BackGround>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({})