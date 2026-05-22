import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size = {'large'} color={'blue'}/>
      <Text style = {styles.loginText}>Loading..</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    
    container: {
        position: 'absolute',
        top: 750,
        width: '70',
        height: 70,
        flex: 1,
        alignItems: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },

    loginText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
})