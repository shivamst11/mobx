import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { counterStore } from './Store';
const Park = () => {
  const { count, increment, decrement } = counterStore;

  return (
    <View style={styles.container}>
      <Text>{count} sjhviam</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default observer(Park);
