import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Component mounted or updated!");

    return () => {
      console.log("Component unmounted or cleaned up!");
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Current Count: {count}</Text>
      <Button
        title="Increase Count"
        onPress={increaseCount}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  countText: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});

export default LifeCycle;
