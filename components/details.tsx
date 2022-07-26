import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Detail({size, color}) {
  return (
    <View style={styles.container}> 
      <Entypo name="plus" size={size} color={color}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e9aef5",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: 'black',
  }
})