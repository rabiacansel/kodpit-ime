import { StyleSheet, View, Image, Pressable} from 'react-native'
import React from 'react'

const SettingsButton = ({onPress}) => {
  return (
    <View style={styles.whiteBack}>
      <Pressable 
            onPress={onPress}
            style={{ width: 55, height: 55}}
            >
              <Image
                source={require('../../assets/settings.png')}
                style = {styles.settingsButton}
              />
            </Pressable>
    </View>
  )
}

export default SettingsButton
const styles = StyleSheet.create({
    settingsButton: {
      width: 55,
      height: 55,
      borderWidth: 3,
      borderColor: '#876565',
      backgroundColor: '#876565',
      borderRadius: 10,
      elevation: 3,
      position: 'absolute',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      left: 317,
      bottom: 9
    },
})