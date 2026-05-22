import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  Image 
} from 'react-native';

import Loading from './src/components/Loading.js';

export default function App() {

  const [name, setName] = useState("")
  const [lastname, setlastName] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  console.log(name)
  console.log(lastname)

  return (
    <View style={styles.container}>

       <Image 
      style = {styles.image}
      source={require('./assets/images/image1.png')}
      />

      <Text style = {{fontWeight: 'bold', marginVertical: 30}}>Hoşgeldin {result}</Text>
      <Text style = {styles.textStyle}>Kullanıcı Adı</Text>
      <TextInput
       inputMode='email'
       style = {styles.textInputStyle} 
       onChangeText={setName}
       placeholder='Kullanıcı adınızı giriniz'
       keyboardType='default'
       />
      
      <Text style = {styles.textStyle}>Şifre</Text>
      <TextInput style = {styles.textInputStyle} 
      placeholder='Şifrenizi giriniz'
      onChangeText={setlastName}
      secureTextEntry={true}
      />

      <Pressable  
      style = {
        ({pressed}) =>
        [
          {
            backgroundColor: pressed? 'lightblue' : 'blue'
          },
          styles.button
        ]

      }
      onPress={()=> setResult(name + lastname)}
      >
        <Text style = {styles.buttonText}>Kaydet</Text>
      </Pressable>

      {isLoading? <Loading/> : null}
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    borderWidth: 2,
    width: '70%',
    height: 55,
    borderRadius: 5,
    textAlign: 'center',
    marginVertical: 10,
    color: 'blue',
    fontWeight: 'bold'
  },
  textStyle: {
    backgroundColor: 'pink',
    width: '30%',
    height: '4%',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 10
  },
  button: {
    borderWidth: 1,
    width:'40%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },

  image: {
    width: 100,
    height: 100
    //resizeMode: 'repeat'
    //resizeMode: 'stretch'
  }

});
