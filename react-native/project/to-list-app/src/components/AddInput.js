import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const AddInput = ({label, placeholder, style}) => {
  return (
    <View style = {style}>
    <View style={[styles.container, {style}]}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
      />
    </View>
    </View>
  )
}

export default AddInput

const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

    textInput: {
        backgroundColor: '#ffffff',
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
        textAlign: 'left'
    }

})