import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Option = ({onPress}) => {
const navigation = useNavigation();

  return (
    <View style={styles.whiteBack}>
      <Pressable 
      onPress={() => navigation.navigate('ProfileScreen')}
      style={{ width: 55, height: 55}}
      >
        <Image
          source={require('../../assets/profile.png')}
          style = {styles.profileStyle}
        />
      </Pressable>
      <Pressable 
      onPress={() => navigation.navigate('HomeScreen')}
      style={{ width: 55, height: 55}}
      >
        <Image
          source={require('../../assets/home.png')}
          style = {styles.homeStyle}
        />
      </Pressable>
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    whiteBack: {
        backgroundColor: '#fff',
        width: '100%',
        height: '8%',
        position: 'absolute',
        justifyContent: 'flex-end',
    },
    homeStyle: {
      width: 55,
      height: 55,
      borderWidth: 2,
      borderColor: '#876565',
      elevation: 3,
      backgroundColor: '#876565',
      borderRadius: 10,
      resizeMode: 'contain', // resmi sığdırır ve orantıyı korur
      alignItems: 'center',
      left: 186,
      bottom: 9
    },
    profileStyle: {
      width: 55,
      height: 55,
      borderWidth: 2,
      borderColor: '#876565',
      elevation: 3,
      backgroundColor: '#876565',
      borderRadius: 10,
      resizeMode: 'contain', // resmi sığdırır ve orantıyı korur
      alignItems: 'center',
      left: 55,
      top: 45,
    }
})