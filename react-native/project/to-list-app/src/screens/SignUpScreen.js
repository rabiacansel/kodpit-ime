import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignupLoginButton from '../components/SignupLoginButton'
import BackGround from '../components/BackGround'
import WhiteBox from '../components/WhiteBox'
import Input from '../components/Input'
import Icon from '../components/Icon'
import SignupSignupButton from '../components/SignupSignupButton'

const SignUpScreen = ({navigation}) => {
  return (
    <BackGround>
        <Icon style={{top: 72}}/>
        <View style = {styles.container}>
            <WhiteBox>
                <Input label = 'Name/Surname' placeholder={'Enter your name and surname'}/>
                <Input label = 'Number' placeholder={'Enter your number'}/>
                <Input label = 'Email' placeholder={'Enter your email'}/>
                <Input label = 'Passwords' placeholder={'Enter your passwords'}/>
                <Input label = 'Confirm Password' placeholder={'Re-enter your password'}/>
                <SignupSignupButton style={{bottom:130}} navigation={navigation}/>
                <SignupLoginButton 
                style={{bottom: 70}}
                navigation={navigation}
                />
            </WhiteBox>
        </View>
    </BackGround>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

})