import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BackGroundHome = ({children}) => {
  return (
    <View style = {styles.background}>

    </View>
  )
}

export default BackGroundHome

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#89638e'
  }
})