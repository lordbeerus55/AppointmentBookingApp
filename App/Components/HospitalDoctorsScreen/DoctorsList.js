import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import DoctorCardItem from '../Shared/DoctorCardItem';

export default function DoctorList({doctorsList}) {
    const navigation= useNavigation();
  return (
    <View style={{marginTop:15}}>
     <FlatList
     data={doctorsList}
     renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('doctor-detail',
        {
            doctor:item
        })}>
            <DoctorCardItem doctor = {item}/>
            </TouchableOpacity>
     )}
     />
    </View>
  )
}

const styles = StyleSheet.create({})