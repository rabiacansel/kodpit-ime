import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackGround from '../components/BackGround'
import FindButton from '../components/FindButton'
import Option from '../components/Option'
import { useNavigation } from '@react-navigation/native';
import AddButton from '../components/AddButton'

const PlannerScreen = () => {
  const navigation = useNavigation();

  return (
    <BackGround>
      <Option/>
      <AddButton onPress={() => navigation.navigate('AddTaskScreen')} />
      <FindButton 
      placeholder={'Find your task'} 
      style = {{bottom: 750}}
      />
      <View style={styles.orContainer}>
            <View style={styles.line} />
                <Text style={styles.orText}>TASKS</Text>
            <View style={styles.line} />
      </View>
      
    </BackGround>
  )
}

export default PlannerScreen

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: 'row',      // Satır yönünde hizalama
    alignItems: 'center',      // Dikey ortalama
    marginVertical: 200,        // Yukarı-aşağı boşluk
    position: 'absolute'
  },
  line: {
    flex: 1,                   // Uzun çizgi
    bottom: 650,
    height: 1,                 // Çizgi kalınlığı
    backgroundColor: '#876565',   // Çizgi rengi
  },
  orText: {
    marginHorizontal: 10,      // Çizgilerle metin arası boşluk
    color: '#4a3838',             // Metin rengi
    fontWeight: 'bold',
    bottom: 650,
    fontSize: 20

  },
})