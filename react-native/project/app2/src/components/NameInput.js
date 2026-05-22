import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Name = () => {
  return (
    <View>
      <Text style = {styles.name}>Username</Text>
      <TextInput style = {[styles.textInput, {paddingLeft: '12%'}]}
      placeholder='Enter Your Username'
      placeholderTextColor='#969596'
      ></TextInput>

      <Text style = {styles.name}>Passwords</Text>
      <TextInput style = {[styles.textInput, {paddingLeft: '11%'}]}
      placeholder='Enter Your Passwords'
      placeholderTextColor='#969596'
      secureTextEntry={true}
      ></TextInput>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
    name: {
      fontSize: 17,
      fontWeight: 700,
      fontStyle: 'normal',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 5,
      color: '#ffffff'
    },
    textInput: {
      borderWidth: 2,
      width: 230,
      height: 50,
      borderRadius: 10,
      fontSize: 13,
      backgroundColor: '#f2defd',
      color: '#8a418d'
    }
})