import React from "react";
import { View, Image, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: "#bd9af5"}}
      >
      
        <Image 
          source={require('../assets/logo.png')}
          style={{height: 50, width: 50, marginLeft: 20,marginTop: 40,  marginBottom: 10}}
        />

        <Text
          style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
          Desus
        </Text>
        <Text
          style={{marginLeft: 20, fontSize: 15, paddingBottom: 10}}>
          desus@antiquorum.com
        </Text>
        <View style={{flex:1, backgroundColor:"#fff", paddingTop: 10}}> 
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer