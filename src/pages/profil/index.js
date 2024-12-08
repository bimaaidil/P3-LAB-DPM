import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderProfil from '../../components/headerProfil';
import NavBarProfil from '../../components/navBarProfil';
import LifeCycle from '../../components/lifecycle';

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <NavBarProfil />
      <ScrollView style={styles.scrollView}>
        <HeaderProfil />
        <LifeCycle />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
});

export default ProfilScreen;
