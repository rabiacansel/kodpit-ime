import {Pressable, StyleSheet, Text} from 'react-native'

const SignupSignupButton = ({navigation, style}) => {
  return (
    <Pressable
    style = {[styles.background, style]}
    onPress={() => navigation.navigate('HomeScreen')}
    >
      <Text style = {styles.textButton}>Sign Up</Text>
    </Pressable>

  )
}

export default SignupSignupButton

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#876565',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: '7%',
      elevation: 10,
      position: 'absolute', 
      alignSelf: 'center'
    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    }

}) 