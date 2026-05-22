import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Icon = ({style}) => {
  return (
    <View style = {[styles.container, style]}>
      <Image
        source={require('../../assets/icon2.png')}
        style = {styles.iconStyle}
      />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    iconStyle: {
        width: 250,
        height: 250,
    },
    container: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    zIndex: 1,
    }
})