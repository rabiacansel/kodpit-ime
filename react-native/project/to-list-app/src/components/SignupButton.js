import {Pressable, StyleSheet, Text} from 'react-native'

const SignupButton = ({navigation, style}) => {
  return (
    <Pressable
    style = {[styles.background, style]}
    onPress={() => navigation.navigate('SignUpScreen')}
    >
      <Text style = {styles.textButton}>Sign Up</Text>
    </Pressable>

  )
}

export default SignupButton

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