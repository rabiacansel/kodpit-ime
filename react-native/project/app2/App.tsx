import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Button from './src/components/Button';
import NameInput from './src/components/NameInput';
import Background from './src/components/Background';


export default function App() {
  return (
      <Background>
      <Text style = {styles.welcome}>Welcome</Text>
      <StatusBar style="auto" />
        <NameInput/>
        <Button title= "Login"/>
        <Button title= "Sign Up"/>
        </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2d8e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    color: '#e1c8ff',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
