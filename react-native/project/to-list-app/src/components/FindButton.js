import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import React from 'react'
import Icon from './Icon'

const FindButton = ({placeholder, style}) => {
  return (
    <View style = {styles.container}>
      <TextInput 
      style = {[styles.findButton, style] }
      placeholder={placeholder}
      >
      </TextInput>
      <Image 
      style = {styles.searchStyle}
      source = {require('../../assets/search.png')}/>
    </View>
  )
}

export default FindButton

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    findButton: {
        backgroundColor: '#ffffff',
        borderWidth: 3,
        elevation: 5,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#876565'
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        left: 200
    },
    searchStyle: {
        width: 35,
        height: 35,
        bottom: 790,
        left: 250,
        opacity: 0.5
    }
})