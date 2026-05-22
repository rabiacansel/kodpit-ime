import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SensorCard from '../components/SensorCard';
import { useWebSocket } from '../hooks/useWebSocket';

const Dashboard = () => {
  // WebSocket URL (cihazın IP veya servis URL’si)
  const wsUrl = 'ws://192.168.1.100:8080'; 
  const { temperature, humidity, light } = useWebSocket(wsUrl);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bitki Dashboard</Text>

      <SensorCard title="Sıcaklık" value={temperature} unit="°C" />
      <SensorCard title="Nem" value={humidity} unit="%" />
      <SensorCard title="Işık" value={light} unit="lx" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default Dashboard;