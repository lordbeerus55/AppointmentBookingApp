import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import GlobalApi from '../Services/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem'

export default function Appointment() {

  const {isLoaded,isSignedIn,user}=useUser();
  const [appointmentlist,setAppointmentList]=useState([]);
  useEffect(()=>{
   if(user.firstName){
    getUserAppointments();
   }
  },[user])
  const getUserAppointments =() =>{
    GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress).then(resp =>{
      setAppointmentList(resp.data.data);
    })
  }
  return (
    <View style={{padding:20}}>
      <PageHeader title ={'My Appointments'} backbutton={false}/>

      <FlatList
      data={appointmentlist}
      renderItem={({item})=>(
        <AppointmentCardItem appointment={item}/>
      )}
      />



    </View>
  )
}

const styles = StyleSheet.create({})