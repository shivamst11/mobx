import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Button } from 'react-native';
// import { counterStore } from './Store';

const Home1 = ({ counterStore, timeStore, navigation }) => {
  // const { count, increment, decrement } = counterStore;
  // console.log('store', store.timeStore);

  const { count, increment, decreament } = counterStore;
  const { time, timeIncrement } = timeStore;

  const fun = () => {
    store.count += 1;
  };

  return (
    <View style={styles.container}>
      <Text>Home1</Text>

      <Text>count {count}</Text>
      <Text>time {time}</Text>
      <Button title={'counter'} onPress={() => increment()} />
      <Button title={'timer'} onPress={() => timeIncrement()} />
      <Button title={'fun'} onPress={() => fun()} />

      <Button title={'press'} onPress={() => navigation.navigate('Park')} />
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
export default inject('counterStore', 'timeStore')(observer(Home1));
