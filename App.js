import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ProfilScreen from './src/pages/profil';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ProfilScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
