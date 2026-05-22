import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const LoginButton = ({navigation, style}) => {
  return (
    <Pressable
    style = {[styles.background, style]}
    onPress = {() => navigation.navigate('HomeScreen')}
    >
      <Text style = {styles.textButton}>Login</Text>
    </Pressable>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#876565',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: '7%',
      elevation: 10,
      position: 'absolute',
      bottom: 350, // beyaz kutunun üstüne gelecek şekilde ayarla
      alignSelf: 'center'
    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    }

}) 