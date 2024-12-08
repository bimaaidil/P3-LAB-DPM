import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NavBarProfil = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.titleText}>My Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default NavBarProfil;
