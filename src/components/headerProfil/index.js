import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HeaderProfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <Text style={styles.nameText}>BimaAidil</Text>
        <Text style={styles.emailText}>bimaaidil208@gmail.com</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor: 'lightgray',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  emailText: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  editButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  editButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default HeaderProfil;
