import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import { StackScreenProps } from '@react-native/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../conntrans/colors';

import Mapiso from './main/mapiso';
import ListScreens from './list/listscreens';

import Feather from 'react-native-vector-icons/Feather'

/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

const Tabs = createBottomTabNavigator();
const getColour = () => [Math.floor(Math.random() * colors.length)];




const Tab = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true
      }}>
      <Tabs.Screen name="Mapiso" component={Mapiso} />
      <Tabs.Screen name="ListScreens" component={ListScreens} />


    </Tabs.Navigator>
  )
}


const TabBar = ({ state, descriptors, navigation, focused }) => {

  const [color, setColour] = useState(getColour());
  const handleClick = () => { setColour(getColour()); }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 8, backgroundColor: colors.blueheavy, alignItems: 'center' }}>

      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Mapiso')}
        style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: state.index == 0 ? colors.white : colors.blueheavy}}
      >

        <Feather
          name={"home"}
          size={24}
          color={state.index == 0 ? colors.blueheavy : '#fff'}
        />
      </TouchableOpacity>



      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Listpage')}
        style={{ width: 48, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: [1, 4].includes(state.index) ? colors.white : colors.blueheavy}}
      >
        <Feather
          name={"book-open"}
          size={24}
          color={[1, 4].includes(state.index) ? colors.blueheavy : '#fff'}
        />
      </TouchableOpacity>






    </View>
  );
}

export default Tab