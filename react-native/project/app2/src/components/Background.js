import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <ImageBackground 
            source = {
            require('../../assets/background.jpg')
        }
        style={styles.background}
    >
        <View style={styles.overlay} /> 
        {children}
    </ImageBackground>
  )
}

export default Background

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        },
          overlay: {
    ...StyleSheet.absoluteFillObject,  // tüm ImageBackground'u kaplar
    backgroundColor: 'rgba(0,0,0,0.6)', // %70 saydam siyah
  },
})