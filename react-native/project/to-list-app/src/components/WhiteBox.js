import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhiteBox = ({children}) => {
  return (
    <View style = {styles.whiteBox}>
      {children}
    </View>
  )
}

export default WhiteBox

const styles = StyleSheet.create({
    whiteBox: {
    backgroundColor: '#fff' ,  
    width: '100%',
    height: '85%',
    borderRadius: 50
  }
})