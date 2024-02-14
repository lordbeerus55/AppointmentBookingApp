import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function AppointmentCardItem({appointment}) {
  return (
    <View style={{padding:10,borderWidth:1,borderColor:Colors.LIGHT_GRAY,borderRadius:10}}>
      <Text style={{
        fontSize:18,
        fontFamily:'appfont-semi'
      }}>{appointment.attributes.Date} - {appointment.attributes.Time}</Text>
      <View>
       <Text style={{fontSize:16,fontFamily:'appfont-semi'}}>{appointment.attributes.hospitals.data[0].attributes.Name}</Text>
      </View>
    </View>
  )
}