import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({label, placeholder, secureTextEntry }) => {
  return (
    <View style = {{top: 40}}>
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

    textInput: {
        backgroundColor: '#c1b5b5',
        width: '80%',
        height: 45,
        borderWidth: 2,
        borderColor: '#866969',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 11,   // imleci soldan biraz içeri alır
        textAlignVertical: 'center',
        color: '#000000',
        fontWeight: 'bold'
        
    },
    textStyle: {
        color: '#604c4c',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    }

})