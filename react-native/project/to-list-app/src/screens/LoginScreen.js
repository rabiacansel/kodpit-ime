import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginButton from '../components/LoginButton'
import BackGround from '../components/BackGround'
import WhiteBox from '../components/WhiteBox'
import Input from '../components/Input'
import Icon from '../components/Icon'
import GoogleIcon from '../components/GoogleIcon'
import SignupButton from '../components/SignupButton'

const LoginScreen = ({navigation}) => {
  return (
    <BackGround>
      <Icon style={{top: 72}}/>
        <View style = {styles.container}>
          <WhiteBox>
            <View>
                <Input
                label="E-mail" placeholder="Enter your email" />
                <Input
                label="Password" placeholder="Enter your password" secureTextEntry={true} />
            </View>
            <Text style = {styles.textForgot}>Forgot passwords?</Text>
            <LoginButton navigation={navigation}/>
            <SignupButton 
            style = {{bottom: 280}}
            navigation={navigation}/>
            <View style={styles.orContainer}>
              <View style={styles.line} />
                <Text style={styles.orText}>Or sign up with</Text>
              <View style={styles.line} />
            </View>
            <GoogleIcon/>
          </WhiteBox>
            
        </View>
    </BackGround>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textForgot: {
    color: '#876565',
    top: 30,
    left: 250,
    textDecorationLine: 'underline'
  },
  orContainer: {
    flexDirection: 'row',      // Satır yönünde hizalama
    alignItems: 'center',      // Dikey ortalama
    marginVertical: 200,        // Yukarı-aşağı boşluk
  },
  line: {
    flex: 1,                   // Uzun çizgi
    top: 25,
    height: 1,                 // Çizgi kalınlığı
    backgroundColor: '#876565',   // Çizgi rengi
  },
  orText: {
    marginHorizontal: 10,      // Çizgilerle metin arası boşluk
    color: '#876565',             // Metin rengi
    fontWeight: 'bold',
    top: 24
  },
})