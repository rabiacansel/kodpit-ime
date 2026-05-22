import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const BackGround = ({children}) => {
  return (
    <ImageBackground
        source = {require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.background}>
        {children}
    </ImageBackground>
  )
}

export default BackGround

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // beyaz kutu ekranın altına
  }
})