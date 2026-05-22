import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Planner = ({ text, position}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('PlannerScreen')}
      style={({ pressed }) => [
        styles.boxBackground,
        styles.container,
        position,
        { opacity: pressed ? 0.6 : 1 } // basıldığında opaklık değişiyor
      ]}
    >
      <Text style={styles.boxText}>{text}</Text>
    </Pressable>
  );
};

export default Planner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBackground: {
    backgroundColor: '#fff',
    elevation: 3,
    height: '13%',
    width: '42%',
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#d2cece',
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: 'bold',
    color: '#604c4c',
    fontSize: 18,
  },
});