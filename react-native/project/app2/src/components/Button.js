import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Button = ({title}) => {
  return (
      <Pressable
      style = {
        ({pressed}) => [
        {
            backgroundColor: pressed? '#c16fb1' : '#a735a9'
        },
        styles.button
      ]
    }
      >
        <Text style = {styles.buttonText}>{title}</Text>
      </Pressable>
      
  )
}

export default Button

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        borderRadius: 30,
        width: '50%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }    
})