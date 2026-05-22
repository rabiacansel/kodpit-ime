import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const GoogleIcon = () => {
  return (
    <View style = {styles.container}>
      <Image
      source = {require('../../assets/google.png')}
      style = {styles.imageStyle}
      />
      <Text style = {styles.googleButton}>Continue with Google</Text>
    </View>
  )
}

export default GoogleIcon

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 520,
        alignSelf: 'center',
    },
    imageStyle: {
        position: 'absolute',
        width: 35,
        height: 35,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        top: 8,
        left: 15
    },
    googleButton:{
      width: 300,
      height: 50,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#b13838',
      elevation: 1,
      color: '#b13838',
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'center',
      textAlignVertical: 'center'
    }
})