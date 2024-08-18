import { View, Text, SafeAreaView, Image, FlatList, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'


import globalStyles from '../../conntrans/globalStyle'
import colors from '../../conntrans/colors'


const ListScreens = () => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{
        ...globalStyles.welcome_padding2
      }}>
          <Text>2</Text>
      </View>
    </SafeAreaView>
  )
}

export default ListScreens